module.exports = {
  'root': true,
  'parserOptions': {
    'sourceType': 'module',
    'parser': 'babel-eslint'
  },
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends':
    [
      'plugin:vue/essential',
      'eslint:recommended'
    ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style':
      [
        'error',
        'unix'
      ],
    'quotes':
      [
        'error',
        'single'
      ],
    'semi':
      [
        'error',
        'always'
      ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};