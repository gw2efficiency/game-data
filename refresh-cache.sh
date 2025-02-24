#!/usr/bin/env sh
set -e

rm -rf .cache
mkdir .cache

echo "Refreshing items cache..."
curl "https://api.gw2efficiency.com/items?lang=en&ids=all" > .cache/items.json

echo "Refreshing achievements cache..."
curl "https://api.gw2efficiency.com/achievements?lang=en&ids=all" > .cache/achievements.json

echo "Refreshing recipes cache..."
curl "https://raw.githubusercontent.com/gw2efficiency/custom-recipes/schema-update/recipes.json" > .cache/recipes.json