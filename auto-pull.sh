#!/usr/bin/env bash

set -exo pipefail

echo "=== [ $(date '+%Y-%m-%d %H:%M:%S') ] ==="

echo "Running compose pull then up"

docker compose pull

docker compose up -d