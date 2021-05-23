// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  root: './html',
  mount: {
    /* ... */
  },
  plugins: [
    /* ... */
    [
      'snowpack-sass-compiler'
    ]
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
    out: './build'
  },
};
