const mode = getStoredValue('myPageMode');

function buttonClick(mode) {
  mode = mode;
  storeValue('myPageMode', mode);
}

function storeValue(key, value) {
  if (localStorage) {
    localStorage.setItem(key, value);
  }
}

function getStoredValue(key) {
  if (localStorage) {
    return localStorage.getItem(key);
  }
}
