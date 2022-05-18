#!/usr/bin/env bash
set -e
cd "$(dirname -- "${BASH_SOURCE[0]}")"

rm -rf zig-cache

zig build-exe humanpwd.zig -target x86_64-macos -O ReleaseSafe -fsingle-threaded --strip
