// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  "globals": {
    "$": true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: ['html'],
  // add your custom rules here
  rules: {
    'no-unused-vars': 0, //不能有声明后未被使用的变量或参数
    'space-before-function-paren': 'off', //函数定义时括号前面要不要有空格
    "indent": 'off', //缩进风格
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0 //2禁止使用debugger
  }
}
