module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
  },
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
  },
  // plugins: ['react-svg'],
};
