#!/bin/bash

set -e

UTILDIR=$(cd $(dirname $0) && pwd)
RJSVERSION="0.23.0"
REQUIREJSDIR="${UTILDIR}/../src/js/requirejs-${RJSVERSION}"
PROFILE="${UTILDIR}/../profiles/app.js"

if [ ! -f "$PROFILE" ]; then
	echo "Invalid input profile"
	exit 1
fi

echo "Building with $PROFILE"
$REQUIREJSDIR/build/build.sh "$PROFILE" "$@"
