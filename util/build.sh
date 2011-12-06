#!/bin/bash

set -e

UTILDIR=$(cd $(dirname $0) && pwd)
BASEDIR=$(cd "$UTILDIR/.." && pwd)
SRCDIR="$BASEDIR/src"
TOOLSDIR="$SRCDIR/js/util/buildscripts"
PROFILE="$BASEDIR/profiles/main.profile.js"
CSSDIR="$SRCDIR/css"
DISTDIR="$BASEDIR/dist"

if [ ! -d "$TOOLSDIR" ]; then
    echo "Can't find Dojo build tools -- did you initialise submodules? (git submodule update --init --recursive)"
    exit 1
fi

if [ ! -f "$PROFILE" ]; then
    echo "Invalid input profile"
    exit 1
fi

echo "Using $PROFILE. CSS will be copied and JS will be built."

# clean the old distribution files
echo -n "Cleaning old files..."
rm -rf "$DISTDIR"
echo " Done"

cd "$TOOLSDIR"

if which node >/dev/null; then
    node ../../dojo/dojo.js load=build "profile=$PROFILE" "releaseDir=$DISTDIR" "$@"
elif which java >/dev/null; then
    java -Xms256m -Xmx256m  -cp ../shrinksafe/js.jar:../closureCompiler/compiler.jar:../shrinksafe/shrinksafe.jar org.mozilla.javascript.tools.shell.Main  ../../dojo/dojo.js baseUrl=../../dojo load=build "profile=$PROFILE" "releaseDir=$DISTDIR" "$@"
else
    echo "Need node.js or Java to build!"
    exit 1
fi

# build LESS file
if which node >/dev/null; then
    cd "$DISTDIR/js/app/resources"
    node "$SRCDIR/js/less/bin/lessc" -x app.less > app.css
    rm app.less
fi


cd "$UTILDIR"

# copy the config.js file
cp "$SRCDIR/js/boot.js" "$DISTDIR/js/boot.js"

# copy the index.html and make it production-friendly
cp "$SRCDIR/index.html" "$DISTDIR/index.html"

# remove development lines in index.html and
# translate *.less links to *.css
sed -i "s/, *isDebug: *1//
/^\s*<!--\s*Inclusion of LESS\..*$/d
/^\s*<script>var less\s*=\s*.*<\/script>/d
/^\s*<script src=[\"']js\/less\/dist\/less\(.*\)\.js[\"'][^>]*><\/script>/d
s/\(<link\).*\(rel=\"stylesheet\)\/less\(\"\).*\(href=\"[^.]*\.\)less\(\">\)/\1 \2\3 \4css\5/" "$DISTDIR/index.html"

echo "Build complete"
