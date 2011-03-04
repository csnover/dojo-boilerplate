#!/bin/bash

set -e

RJSVERSION="0.23.0"
REQUIREJSDIR="../src/js/requirejs-${RJSVERSION}"
PROFILE="../profiles/app.js"

if [ ! -f "$PROFILE" ]; then
	echo "Invalid input profile"
	exit 1
fi

echo "Building with $PROFILE"
$REQUIREJSDIR/build/build.sh "$PROFILE" "$@"
