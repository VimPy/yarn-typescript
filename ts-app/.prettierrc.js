/**
 * .prettierrc.js文件用于定义代码格式化的规则，统一代码风格
 * 在 package.json 中增加 style:prettier
 * 运行 yarn style:prettier 将会自动格式化 src 目录下的所有 .ts 文件
 * 参考文档：https://prettier.io/docs/en/options.html
 */
module.exports = {
    printWidth: 140, // 一行最多 140 字符
    tabWidth: 4, // 使用 4 个空格缩进
    useTabs: false, // 不使用缩进符，而使用空格
    semi: true, // 行尾需要有分号
    singleQuote: true, // 使用单引号
    jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
    trailingComma: 'all', // 最后一个对象元素末尾需要逗号,值有none es5 all
    bracketSpacing: true, // 大括号内的首尾需要空格
    jsxBracketSameLine: false, // jsx 标签的反尖括号需要换行
    arrowParens: 'always', // 箭头函数，只有一个参数的时候，也需要括号
    rangeStart: 0, // 每个文件格式化的范围是文件的全部内容
    rangeEnd: Infinity,
    requirePragma: false, // 不需要写文件开头的 @prettier
    insertPragma: false, // 不需要自动在文件开头插入 @prettier
    proseWrap: 'preserve', // 使用默认的折行标准
    htmlWhitespaceSensitivity: 'css', // 根据显示样式决定 html 要不要折行
    endOfLine: 'lf', // 换行符使用 lf
}