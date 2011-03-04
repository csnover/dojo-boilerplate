#!/bin/bash

set -e

OUTDIR="src/js"
VERSION="1.6.0"
RJSVERSION="0.23.0"

DOJODIR="dojo-release-${VERSION}-src"
REQUIREJSDIR="requirejs-${RJSVERSION}"

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
	echo "Retrieving Dojo $VERSION"
	$GET http://download.dojotoolkit.org/release-$VERSION/$DOJODIR.tar.gz | tar -C "$OUTDIR" -xzf -
	echo "Dojo extracted to $OUTDIR/$DOJODIR"
fi

if [ ! -d "$OUTDIR/$REQUIREJSDIR" ]; then
	echo "Retrieving RequireJS $RJSVERSION"
	$GET http://requirejs.org/docs/release/$RJSVERSION/requirejs-$RJSVERSION.zip > \
		"$OUTDIR/requirejs-$RJSVERSION.zip" && \
	unzip "$OUTDIR/requirejs-$RJSVERSION.zip" -d "$OUTDIR" > /dev/null
	rm "$OUTDIR/requirejs-$RJSVERSION.zip"
	echo "RequireJS extracted to $OUTDIR/$REQUIREJSDIR"
fi

echo "Done!"
