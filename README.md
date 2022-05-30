# Vue 3 Progress Bar

[![license](https://img.shields.io/npm/l/vue3-progress?color=%2351bff4)](https://revolunet.mit-license.org/) [![npm](https://img.shields.io/npm/v/vue3-progress?color=%2333efc7)](https://www.npmjs.com/package/vue3-progress) [![downloads](https://img.shields.io/npm/dm/vue3-progress?color=%23ad43a7)](https://www.npmjs.com/package/vue3-progress)

- Are you looking for a progress bar to show at the top of your app while you are switching pages and implements perfectly with 'vue-router'?

- Are you looking for a progress bar to show while you are loading data?

- Are you looking for a "easy to implement" progress bar?

- Are you looking for a beautiful progress bar?

Then you have come to the right place!

This progress bar is so easy to implement, and looks amazing on all apps!
The default loading bar colors in an amazing css animation! Don't like the colors? No problem, this projet supports custom colors.

This project is Vue 3 and TypeScript compatible!

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
