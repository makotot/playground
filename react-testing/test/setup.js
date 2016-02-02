import jsdom from 'jsdom';

function setupDom() {
  if (typeof document === 'undefined') {
    global.document = jsdom.jsdom('<html><body></body></html>');
    global.window = document.defaultView;
    global.navigator = window.navigator;
  }

  propagateToGlobal(window)

  function propagateToGlobal (window) {
    for (let key in window) {
      if (!window.hasOwnProperty(key)) {
        continue
      }
      if (key in global) {
        continue
      }
      global[key] = window[key]
    }
  }
}

setupDom();
