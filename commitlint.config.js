module.exports = {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'UPT',
        'FEAT',
        'ADD',
        'MOD',
        'STYLE', // 纯样式修改
        'CHANGE',
        'REFACT',
        'REVERT',
        'FIX',
        'DEL', // 移除文件
        'TEST',
        'BUG',
        'CHORE', // 依赖包 工具包的更新
        'DOC',
      ],
    ],
    'type-case': [2, 'always', 'upper-case'],
    'type-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-empty': [2, 'never'],
    'body-empty': [0],
  },
  helpUrl:
    'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
};
