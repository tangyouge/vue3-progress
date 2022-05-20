![cover](https://user-images.githubusercontent.com/11075892/98070512-4b2e7780-1e9c-11eb-885f-b13c91cee889.png)

# vue3-progress

[![license](https://img.shields.io/npm/l/vue3-progress?color=%2351bff4)](https://revolunet.mit-license.org/) [![npm](https://img.shields.io/npm/v/vue3-progress?color=%2333efc7)](https://www.npmjs.com/package/vue3-progress) [![downloads](https://img.shields.io/npm/dm/vue3-progress?color=%23ad43a7)](https://www.npmjs.com/package/vue3-progress)

`A vue3 progress bar component in which custom colors are supported`

`一款 vue3 进度条组件 支持自定义喜欢的颜色`

This is Vue Component is now Type Script Compatible!

## Demo

[Live Demo](https://vue3-progress.netlify.app/)

## Install

```shell
$ npm i vue3-progress
```

## Usage

`main.js`

```js
import Vue3Progress from "vue3-progress";

const options = {
  position: "fixed",
  height: "3px",
  // color: "<Your Color>",
};

createApp(App).use(Vue3Progress, options).mount("#app");
```

`App.vue`

```vue
<template>
  <div id="app">
    <vue3-progress />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$progress.finish();
  },
  created() {
    this.$progress.start();

    this.$router.beforeEach((to, from, next) => {
      this.$progress.start();
      next();
    });

    this.$router.afterEach((to, from) => {
      this.$progress.finish();
    });
  },
};
</script>
```

## APIs

```JavaScript
this.$progress.start() // start the loading
```

```JavaScript
this.$progress.finish() // finish the loading
```

```JavaScript
this.$progress.height(4) // resize the height of loading bar to 4px
```

## License

[MIT](https://opensource.org/licenses/MIT)

## Links

[Vue.js - The Progressive JavaScript Framework](https://vuejs.org/)

[vue-ins-progress-bar 一款 ins 风格的 vue 进度条组件](https://github.com/meloalright/vue-ins-progress-bar)
