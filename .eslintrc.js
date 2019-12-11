module.exports = {
  extends: [
    'alloy',
    'alloy/typescript',
  ],
  env: {
    // 您的环境变量（包含多个预定义的全局变量）
    // Your environments (which contains several predefined global variables)
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {},
  rules: {
    'max-params': [ 1, 3 ],
  },
}