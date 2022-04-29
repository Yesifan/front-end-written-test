# zj-intervieww
该笔试不仅考察候选人解决问题的能力， 同时也考察代码规范，Git的使用，需求理解，样式设计等其他方面的能力。

比如变量的命名习惯，commit 的提交等。

候选人可以导入一些辅助编程的基础库，比如 TypeScirt, Less, Sass，对于 Vue 也可以导入 vuex, class component 或者 composition api 等库。
## 题目
### JavaScript
按题目说明编写需要的 class 或 function 。
- `Promise` - [/lib/promise](./src/lib/promise/index.js)

### Vue
使用Vue完成组件的开发, 可以运行 `npm run serve` 进行调试，[App.vue](./src/App.vue) 可以任意修改。

详细要求阅读目录下的 `README.md`
- `Swiper` - [/component/swiper](./src/components/swiper/README.md)
- `Message` - [/component/message](./src/components/message/README.md)

## Test
运行测试
```
npm run test:unit
```
组件的实现方式多种多样，组件测试不一定适用于所有组件。所以只要满足功能，不满足测试也算完成。

不过如果可以修改测试使测试成功是更好的。
## Resource
- [jest](https://jestjs.io/zh-Hans/)
- [Vue Test Utils](https://v1.test-utils.vuejs.org/zh/)
- [testing-library](https://testing-library.com/docs/vue-testing-library/intro)
- [jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/)
