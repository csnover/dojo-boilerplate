#!/bin/bash

set -e

UTILDIR=$(cd $(dirname $0) && pwd)

# Base directory for this entire project
BASEDIR=$(cd "$UTILDIR/.." && pwd)

# Source directory for unbuilt code
SRCDIR="$BASEDIR/src"

# Directory containing dojo build utilities
TOOLSDIR="$SRCDIR/js/util/buildscripts"

# Destination directory for built code
DISTDIR="$BASEDIR/dist"

# Main application package
PACKAGEDIR="$BASEDIR/src/js/app"

# Main application package loader configuration
LOADERCONF="$PACKAGEDIR/run.js"

if [ ! -d "$TOOLSDIR" ]; then
    echo "Can't find Dojo build tools -- did you initialise submodules? (git submodule update --init --recursive)"
    exit 1
fi

echo "Building application at $PACKAGEDIR."

# clean the old distribution files
echo -n "Cleaning old files..."
rm -rf "$DISTDIR"
echo " Done"

cd "$TOOLSDIR"

if which node >/dev/null; then
    node ../../dojo/dojo.js load=build --require "$LOADERCONF" --package "$PACKAGEDIR" --releaseDir "$DISTDIR" "$@"
elif which java >/dev/null; then
    java -Xms256m -Xmx256m  -cp ../shrinksafe/js.jar:../closureCompiler/compiler.jar:../shrinksafe/shrinksafe.jar org.mozilla.javascript.tools.shell.Main  ../../dojo/dojo.js baseUrl=../../dojo load=build --require "$LOADERCONF" --package "$PACKAGEDIR" --releaseDir "$DISTDIR" "$@"
else
    echo "Need node.js or Java to build!"
    exit 1
fi

cd "$UTILDIR"

# copy the index.html and make it production-friendly
cp "$SRCDIR/index.html" "$DISTDIR/index.html"
sed -i "s/, *isDebug: *1//" "$DISTDIR/index.html"

echo "Build complete"
