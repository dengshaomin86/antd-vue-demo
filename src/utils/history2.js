// 重写 history.pushState|history.replaceState，添加监听

const pushState = history.pushState;
const replaceState = history.replaceState;

history.pushState = function(state, title, url) {
  if (typeof history.onPushState == 'function') {
    history.onPushState(...arguments);
  }
  return pushState.apply(history, arguments);
};

history.replaceState = function(state, title, url) {
  if (typeof history.onReplaceState == 'function') {
    history.onReplaceState(...arguments);
  }
  return replaceState.apply(history, arguments);
};

history.onPushState = function(state, title, url) {
  console.log('onPushState', ...arguments);
};

history.onReplaceState = function(state, title, url) {
  console.log('onReplaceState', ...arguments);
};
