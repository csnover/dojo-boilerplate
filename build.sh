#!/usr/bin/env bash

set -e

# Base directory for this entire project
BASEDIR=$(cd $(dirname $0) && pwd)

# Source directory for unbuilt code
SRCDIR="$BASEDIR/src"

# Directory containing dojo build utilities
TOOLSDIR="$SRCDIR/util/buildscripts"

# Destination directory for built code
DISTDIR="$BASEDIR/dist"

# Main application package build configuration
PROFILE="$BASEDIR/profiles/app.profile.js"

# Configuration over. Main application start up!

if [ ! -d "$TOOLSDIR" ]; then
	echo "Can't find Dojo build tools -- did you initialise submodules? (git submodule update --init --recursive)"
	exit 1
fi

echo "Building application with $PROFILE to $DISTDIR."

echo -n "Cleaning old files..."
rm -rf "$DISTDIR"
echo " Done"

stylus -c "$SRCDIR/app/resources/app.styl"
"$TOOLSDIR/build.sh" --profile "$PROFILE" --releaseDir "$DISTDIR" $@

cd "$BASEDIR"

# Copy & minify index.html to dist
cat "$SRCDIR/index.html" | \
perl -pe 's/\/\/.*$//gm;       # Strip JS comments' |
perl -pe 's/\n/ /g;            # Replace newlines with whitespace' |
perl -pe 's/<\!--.*?-->//g;    # Strip HTML comments' |
perl -pe 's/isDebug: *true,//; # Remove isDebug' |
perl -pe 's/\s+/ /g;           # Collapse whitespace' > "$DISTDIR/index.html"

echo "Build complete"
