module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    commonjs: true,
    amd: true,
    'vue/setup-compiler-macros': true, // 让`setup`语法不需要导入`defineProps`
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential', // `vue3`不需要唯一根标签
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: 'vue-eslint-parser', // `vue3`的`setup`语法支持
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true },
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
}
