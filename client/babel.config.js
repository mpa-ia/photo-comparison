module.exports = {
  presets: [
    'react-app',
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-flow',
    '@babel/preset-typescript'
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime',
  ],
};