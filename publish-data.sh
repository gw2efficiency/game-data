#!/usr/bin/env sh

rm -rf build/
yarn version --patch
yarn build
cd build/ || exit 1
npm publish --access=public
git push
