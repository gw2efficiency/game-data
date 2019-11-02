# Game Data (WIP)

Additional game data that the API does not provide.

## Source Structure

The directory structure shows what type of data it is (for example `mounts/skins`).
In each directory, there are the following files:

- `data.ts` - The data for this type
- `test.ts` - Tests that parse `data.ts` and validate if the content is valid
- `generate.ts` - Some way to generate `data.ts` entirely or partially (if applicable)
