import { join } from 'path'

module.exports = {
  astro: {
    // The path of the standalone server that runs Astro SSR.
    // The dependencies for this file are automatically bundled.
    appPath: join(process.cwd(), 'dist', 'server', 'entry.mjs'),
  },
};
