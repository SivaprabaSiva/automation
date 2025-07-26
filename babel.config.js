module.exports = {
  presets: [
    '@babel/preset-typescript',
    ['@babel/preset-env', {
      targets: {
        browsers: ['>0.25%', 'not dead'],
        node: 'current',
      },
      // You can configure other @babel/preset-env options here
    }],
  ],
  plugins: [
    // Add any Babel plugins you need here
  ],
};