module.exports = {
  printWidth: 80,
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
  semi: true,
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    'interface',
    '(?=content|api)',
    'context/',
    'mock/',
    'config',
    'utils/',
    'hooks/',
    '(components/|./index)',
    '.svg',
    '^../(.*)$',
    '(?=./styles.module.scss)',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};