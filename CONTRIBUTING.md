# dotnet-workshop 开发者贡献指南

## 分支管理

+ `main`: 主分支，用于正式发布，需要 3 个 approving reviews，只能由 `dev` 分支提出 Pull Request
+ `dev`: 开发分支，用于更新最新进展，需要 1 个 approving review，用于提出 Pull Request 的目标分支

## 向 dotnet-workshop 贡献代码

请遵循贡献流程，向 dotnet-workshop 贡献代码 

1. 将本仓库 fork 到自己的仓库中
2. 在你自己的仓库中基于 `main` 分支建立一个新的分支，分支命名规则为：
  + 增加新功能，功能分支命名为 `feat/**`
  + 进行 Bug 修复，修复分支命名为 `fix/**`
  + 增减单元测试，测试分支命名为 `test/**`
  + 进行文档的增删，文档分支命名为 `docs/**`
3. 在新的分支上进行修改与开发
4. 向本仓库的 `dev` 分支提出 Pull Request

## 文档规范

仓库的文档使用 Markdown 语法，具体语法可以参照 [Markdown 语法文档](https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)。

中文文档的书写须严格遵循：[中午技术文档规范](https://github.com/ruanyf/document-style-guide)、[中文文案排版指北](https://mazhuang.org/wiki/chinese-copywriting-guidelines/)，以写出更美观的中文文档。例如：[中文文字与西文文字间空格](https://github.com/ruanyf/document-style-guide/blob/master/docs/text.md#%E5%AD%97%E9%97%B4%E8%B7%9D)、[全角标点符号的正确使用](https://github.com/ruanyf/document-style-guide/blob/master/docs/marks.md)，等等。且本仓库文档的中文引号一律使用与汉字等宽的 `「」` 而非 `“”`。

西文文档的书写须遵循：

+ 在 [中午技术文档规范](https://github.com/ruanyf/document-style-guide) 和 [中文文案排版指北](https://mazhuang.org/wiki/chinese-copywriting-guidelines/) 中规定的数字和西文的规范
+ 半角空格的标点符号的使用：
  + 半角的逗号 `,`、分号 `;`、句号 `.`、叹号 `!`、问号 `?` 等标点，在不位于行尾时，后需加空格，除非其后紧跟全角标点符号。例如：`"Hello, world"，是一句学习编程语言常用的句子`
  + 半角的括号 `()`、`[]`、`{}`、`<>` 等在左半括号前加空格、右半括号后加空格，除非其空格处紧跟全角标点符号或位于行首或行尾。例如：`Tsinghua University (THU) and Peking University (PKU)（我是全角括号）`
