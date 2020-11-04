![cover](https://user-images.githubusercontent.com/11075892/98070512-4b2e7780-1e9c-11eb-885f-b13c91cee889.png)

# vue3-progress

[![license](https://img.shields.io/npm/l/vue3-progress?color=%2351bff4)](https://revolunet.mit-license.org/) [![npm](https://img.shields.io/npm/v/vue3-progress?color=%2333efc7)](https://www.npmjs.com/package/vue3-progress) [![downloads](https://img.shields.io/npm/dm/vue3-progress?color=%23ad43a7)](https://www.npmjs.com/package/vue3-progress)

`A vue3 component of progress bar`

`一款 vue3 进度条组件`

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
  color: "#8bf6c7", // Default rainbow 缺省默认为彩虹色
};

createApp(App).use(Vue3Progress, options).mount("#app");
```

`App.vue`

```vue
<template>
  <vue3-progress />
  <!-- Set it on the top -->
</template>

<script>
export default {
  name: "App",
  created() {
    this.$progress.start();
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

## Quick Debug

```shell
$ npm install -g @vue/cli # OR yarn global add @vue/cli

$ vue create demo # select vue 3 preset

$ cd demo # cd demo then install and use vue3-progress
```

## License

[MIT](https://opensource.org/licenses/MIT)
