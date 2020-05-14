module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-styled-components',
    'react-hot-loader/babel',
    '@babel/plugin-transform-regenerator',
  ],
};
