#!/usr/bin/env sh
set -e

rm -rf build/
echo ">> Cleaned up build"

yarn version --patch
echo ">> Bumped version"

yarn build
echo ">> Built"

cd build/ || exit 1
echo ">> Switched into build"

yarn publish --access=public
echo ">> Published"

git push
echo ">> Pushed"
