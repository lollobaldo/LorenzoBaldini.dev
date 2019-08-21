export const domReady = (callBack) => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callBack);
  } else {
    callBack();
  }
};

export const windowReady = (callBack) => {
  if (document.readyState === 'complete') {
    callBack();
  } else {
    window.addEventListener('load', callBack);
  }
};

export default { domReady, windowReady };
