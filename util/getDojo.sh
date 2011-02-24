#!/bin/bash

set -e

OUTDIR=../js
VERSION="1.5.0"
DOJODIR="dojo-release-${VERSION}-src"

OUTDIR=$(cd $OUTDIR 2&> /dev/null && pwd || echo "")

if [ "$OUTDIR" = "" ]; then
	echo "Output directory not found"
	exit 1
fi

if [ ! -d "$OUTDIR/$DOJODIR" ]; then
	echo "Retrieving dojo $VERSION"
	wget -O - http://download.dojotoolkit.org/release-$VERSION/$DOJODIR.tar.gz | tar -C "$OUTDIR" -xzf -
	echo "Dojo extracted to $OUTDIR/$DOJODIR"
fi

if [ ! -d "$OUTDIR/dojo-release-$VERSION" ]; then
	echo "Building minified dojo-release-$VERSION"
	cd "$OUTDIR/$DOJODIR/util/buildscripts"
	./build.sh profile=standard version=$VERSION action=release releaseName=dojo-release-$VERSION "releaseDir=$OUTDIR"
	cd - > /dev/null
fi

echo "Done!"
