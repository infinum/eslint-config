module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    es2017: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'prettier/standard'
  ],
  plugins: [
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  }
};
