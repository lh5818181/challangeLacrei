const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    'postcss-preset-env',
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
