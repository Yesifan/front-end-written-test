# front-end-intervieww
该笔试不仅考察候选人解决问题的能力， 同时也考察代码规范，Git的使用，需求理解，样式设计等其他方面的能力。

比如变量的命名习惯，`commit` 的提交等。

候选人可以导入一些辅助编程的基础库，比如 TypeScirt, Less, Sass，对于 Vue 也可以导入 vuex, class component 或者 composition api 等库。

## 笔试流程
项目中题目较多， 至少选择**三个题目**进行作答，不能只选择 `JavaScript` 或 `Vue` 的题目。本笔试不限制时间，所以有余力的同学可以多做几题。

最好每开始一个题目的时候都通过一个空 `commit` 来开始你的答题。
```
git commit --allow-empyt -m "start xxxx topic"
```
然后每做完一题，并检测无误后也通过一个 `commit` 来结束你的答题。这样做方便面试官统计你的作答时间，你也可以在答完一题后休息片刻再答下一道题。

提交之前记得先运行一下 `jest` 进行测试。

对于比较复杂的题目，建议候选人每实现一个功能上的里程碑都提交一次 `commit`，方便面试官观察你的实现思路和思考习惯。

对于不会或疑惑的题目，我非常建议候选人以 `思考和尝试 -> 搜索相关资料 -> 思考和尝试` 的步骤去尝试作答，而不是直接放弃。如果最后还是没有做出实现也可要直接搜索 `相关实现或答案`。当然，搜出答案后肯定不是 `ctrl+c/v` 就完事了，因为后续面试中还会就笔试中的实现方式提出一些问题。所以搜出答案后再看着答案进行思考和尝试，最终用自己的代码把答案写出来。

`Vue` 的题目虽然没有提到 `css`，但是 `css` 是前端日常工作中占据了非常重要的地位。你可以通过对组件样式的优化来展示你在 `css` 的能力。

有些题目除了基础功能要求，还有一些进阶要求。大多数时候相比量，还是质更重要，写深写透更能展现你的实力。

### 交卷
候选人做完后所有题目后，将 `单元测试` 和 `首页` 的截图保存到项目根目录中的 `result` 文件夹中， 然后展示到 [README](./README.md) 的最上部。

然后将你的名字，截图和项目地址发送到 <a href="mailto:yesifan66@qq.com">这个邮箱</a>。对于一些题目的疑问，交卷后你也可以在邮箱中问我，我会尽力给你回答。

## 题目
### `JavaScript`
按题目说明编写需要的 class 或 function 。

- `计算补集` - [/lib/getSet](./src/lib/getSet/index.js)
- `计算相邻单词` - [/lib/getWordNeighors](./src/lib/getWordNeighors/index.js)
- `深拷贝` - [/lib/deepcopy](./src/lib/deepcopy/index.js)
- `Promise` - [/lib/promise](./src/lib/promise/index.js)
- `Extends` - [/lib/extends](./src/lib/extends/index.js)

### `Vue`
使用Vue完成组件的开发, 可以运行 `npm run serve` 进行调试，[App.vue](./src/App.vue) 可以任意修改。

详细要求阅读目录下的 `README.md`
- `Swiper` - [/component/swiper](./src/components/swiper/README.md)
- `Message` - [/component/message](./src/components/message/README.md)
- `Unlimited Menu` - [/components/unlimited-menu](./src/components/unlimited-menu/README.md)

## Test
运行测试
```
npx jest # 运行所有测试
npx jest path/to/my-test.js # 运行单个测试文件
jest -t name-of-spec # 运行单个 describe 或 test
```
组件的实现方式多种多样，组件测试不一定适用于所有组件。

所以只要满足功能，不满足测试也算完成。你也可以修改测试，使测试符合你的实现。
## Resource
- [jest](https://jestjs.io/zh-Hans/)
- [Vue Test Utils](https://v1.test-utils.vuejs.org/zh/)
- [testing-library](https://testing-library.com/docs/vue-testing-library/intro)
- [jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/)
