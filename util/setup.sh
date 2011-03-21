#!/bin/bash

set -e

VERSION="1.6.0"

THISDIR=$(cd $(dirname $0) && pwd)
OUTDIR="$THISDIR/../www/js"
DOJODIR="dojo-release-${VERSION}-src"
OUTDIR=$(cd "$OUTDIR" &> /dev/null && pwd || echo "")

if [ -x $(which wget) ]; then
	GET="wget --no-check-certificate -O -"
elif [ -x $(which curl) ]; then
	GET="curl -L --insecure -o -"
else
	echo "No cURL, no wget, no downloads :("
	exit 1
fi

if [ "$OUTDIR" = "" ]; then
	echo "Output directory not found"
	exit 1
fi

if [ ! -d "$OUTDIR/$DOJODIR" ]; then
	echo "Fetching Dojo $VERSION"
	$GET http://download.dojotoolkit.org/release-$VERSION/$DOJODIR.tar.gz | tar -C "$OUTDIR" -xzf -
	echo "Dojo extracted to $OUTDIR/$DOJODIR"
fi
