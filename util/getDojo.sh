#!/bin/bash

set -e

OUTDIR=../js
VERSION="1.5.0"
DOJODIR="dojo-release-${VERSION}-src"

OUTDIR=$(cd "$OUTDIR" &> /dev/null && pwd || echo "")

if [ "$OUTDIR" = "" ]; then
	echo "Output directory not found"
	exit 1
fi

if [ ! -d "$OUTDIR/$DOJODIR" ]; then
	echo "Retrieving dojo $VERSION"

	if [ -x $(which wget) ]; then
		wget -O - http://download.dojotoolkit.org/release-$VERSION/$DOJODIR.tar.gz | tar -C "$OUTDIR" -xzf -
	elif [ -x $(which curl) ]; then
		curl -o - http://download.dojotoolkit.org/release-$VERSION/$DOJODIR.tar.gz | tar -C "$OUTDIR" -xzf -
	else
		echo "No cURL, no wget, no downloads :("
		exit 1
	fi

	echo "Dojo extracted to $OUTDIR/$DOJODIR"
fi

if [ ! -d "$OUTDIR/dojo-release-$VERSION" ]; then
	echo "Building minified dojo-release-$VERSION"
	cd "$OUTDIR/$DOJODIR/util/buildscripts"
	./build.sh profile=standard version=$VERSION action=release releaseName=dojo-release-$VERSION "releaseDir=$OUTDIR"
	cd - &> /dev/null
fi

echo "Done!"
