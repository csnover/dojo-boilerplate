#!/bin/bash

set -e

DOJOVERSION="1.6.0"

THISDIR=$(cd $(dirname $0) && pwd)
UTILDIR="$THISDIR/../src/js/dojo-release-${DOJOVERSION}-src/util/buildscripts"
PROFILE="$THISDIR/../profiles/app.js"
CSSDIR="$THISDIR/../src/css"
DISTDIR="$THISDIR/../dist"

if [ ! -d "$UTILDIR" ]; then
  echo "Can't find Dojo build tools -- did you run ./util/setup.sh?"
  exit 1
fi

if [ ! -f "$PROFILE" ]; then
  echo "Invalid input profile"
  exit 1
fi

echo "Building with $PROFILE"

# clean the old distribution files
rm -rf "$DISTDIR"

# i know this sucks, but sane-er ways didn't seem to work ... :(
cd "$UTILDIR"
./build.sh profileFile=../../../../../profiles/app.js releaseDir=../../../../../dist/
cd "$THISDIR"

# copy the css files
# todo: how to do this better?
cp -r "$CSSDIR" "$DISTDIR/css"
