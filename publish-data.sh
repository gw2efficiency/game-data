#!/usr/bin/env sh
set -e

rm -rf build/
yarn version --patch
yarn build
cd build/ || exit 1
yarn publish --access=public
git push
