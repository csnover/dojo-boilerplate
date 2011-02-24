#!/bin/bash

set -e

VERSION="1.5.0"
DOJODIR="../js/dojo-release-${VERSION}-src"

PROFILE="../profiles/app.js"
OUTDIR="../js/release"

if [ ! -d "$OUTDIR" ]; then
	# mkdir will output a message to stderr if it fails
	mkdir "$OUTDIR" || exit 1
fi

if [ ! -f "$PROFILE" ]; then
	echo "Missing profile"
	exit 1
fi

# Ugly but effective way to absolutize paths
PROFILE="$(cd $(dirname "$PROFILE") &> /dev/null && pwd || echo "")/$(basename "$PROFILE")"
OUTDIR=$(cd "$OUTDIR" &> /dev/null && pwd || echo "")

cd $DOJODIR/util/buildscripts && ./build.sh "profileFile=$PROFILE" "releaseDir=$OUTDIR" "$@"
