#!/bin/bash

set -e

vue-tsc -p tsconfig.json
tsc -p app/examples/layers/tsconfig.json
