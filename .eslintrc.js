module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/destructuring-assignment': [<enabled />, "never"],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  parser: ['babel-eslint'],
};
