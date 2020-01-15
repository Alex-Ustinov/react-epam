let debounced = (func, wait) => {
    let timeout;
    return (...args) => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        func(args);
      }, wait);
    };
}

export default debounced