"use strict";

import Vue3Progress from "./vue3-progress.vue";
import v3bus from "./v3bus";

function install(app, options = {}) {
  const inBrowser = typeof window !== "undefined";

  const DEFAULT_OPTION = {
    position: "fixed",
    height: "3px",
  };

  let progress = {
    $init: false,
    state: {
      timer: { fadeAway: null, fill: null },
      isFull: false,
      isWFA: false,
    },
    init() {
      this.$init = true;
    },
    __fillBeginning() {
      this.state.isFull = false;
      v3bus.__notify_begin();
    },
    __fillFinally() {
      this.state.isFull = true;
      this.state.timer.fill = null;
    },
    __fadeBeginning() {
      this.state.isWFA = false;
      v3bus.__notify_fade();
    },
    __fadeFinally() {
      this.state.timer.fadeAway = null;
      this.state.isFull = null;
      v3bus.__notify_after_fade();
    },
    __isFilling() {
      return this.state.timer.fill;
    },
    __isFading() {
      return this.state.timer.fadeAway;
    },
    __killFading() {
      clearTimeout(this.state.timer.fadeAway);
      this.state.isWFA = false;
      this.state.timer.fadeAway = null;
    },
    __waiting() {
      this.state.isWFA = true;
    },
    __isWaiting() {
      return this.state.isWFA;
    },
    start() {
      if (!this.$init) return;
      this.__killFading();
      if (this.__isFilling()) return;
      this.__fillBeginning();
      this.state.timer.fill = setTimeout(() => {
        this.__fillFinally();
        if (this.__isWaiting()) {
          this.finish();
        }
      }, 500);
    },
    height(h) {
      window.V3P_OPT.height = `${h}px`;
      v3bus.__notify_height();
    },
    __hide() {
      if (this.__isFading()) return;
      if (this.__isFilling()) {
        this.__waiting();
        return;
      }
      this.__fadeBeginning();
      this.state.timer.fadeAway = setTimeout(() => {
        this.__fadeFinally();
      }, 200);
    },
    finish() {
      if (!this.$init) return;
      this.__hide();
    },
  };

  let progressOptions = Object.assign(DEFAULT_OPTION, options);

  if (inBrowser) {
    window.V3P_OPT = progressOptions;
    progress.init(progressOptions);
  }

  app.component("vue3-progress", Vue3Progress);

  app.config.globalProperties.$progress = progress;
}

export default {
  install,
};
