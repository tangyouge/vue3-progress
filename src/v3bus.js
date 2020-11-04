import { nextTick } from "vue";
export default {
  __on_notify_begin: null,
  __on_notify_fade: null,
  __on_notify_after_fade: null,
  __on_notify_height: null,
  setEventHandlers: function ({ begin, fade, afterFade, height }) {
    this.__on_notify_begin = begin;
    this.__on_notify_fade = fade;
    this.__on_notify_after_fade = afterFade;
    this.__on_notify_height = height;
  },
  __notify_begin: function () {
    nextTick(() => {
      this.__on_notify_begin && this.__on_notify_begin();
    });
  },
  __notify_fade: function () {
    nextTick(() => {
      this.__on_notify_fade && this.__on_notify_fade();
    });
  },
  __notify_after_fade: function () {
    nextTick(() => {
      this.__on_notify_after_fade && this.__on_notify_after_fade();
    });
  },
  __notify_height: function () {
    nextTick(() => {
      this.__on_notify_height && this.__on_notify_height();
    });
  },
};
