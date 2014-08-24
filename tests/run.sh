#!/usr/bin/env bash

set -e

# Base directory for this entire project
BASEDIR=$(cd $(dirname $0)/.. && pwd)

cd "$BASEDIR"
node_modules/.bin/intern-runner config=tests/intern $@
