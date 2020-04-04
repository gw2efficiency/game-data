# Game Data (WIP)

Additional game data that the API does not provide.

You should likely not use this yet, because it will have breaking versions until 1.0.

## Usage

The following two import forms are supported:

- CommonJS: `const mountSkinData = require('@gw2efficiency/game-data/mounts/skins')`
- ES Modules: `import mountSkinData from '@gw2efficiency/game-data/mounts/skins'`

## Data

- `@gw2efficiency/game-data/commerce/blacklist`: A list of items that are in the commerce API but not actually tradable
- `@gw2efficiency/game-data/home/cats`: Additional information about home cats
- `@gw2efficiency/game-data/home/nodes`: Additional information about home nodes
- `@gw2efficiency/game-data/items/categories/cosmetic-auras`: Which items are categorized as cosmetic auras
- `@gw2efficiency/game-data/mounts/skins`: Additional information about mount skins

## Source Structure

The directory structure shows what type of data it is (for example `mounts/skins`).
In each directory, there are the following files:

- `data.ts` - The data for this type
- `test.ts` - Tests that parse `data.ts` and validate if the content is valid
- `generate.ts` - Some way to generate `data.ts` entirely or partially (if applicable)

## Publishing a new version

```sh
sh publish-data.sh
```
