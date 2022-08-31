"use strict";

const array = [];
let counter = 0;

init();

function init() {
  counter += 1;

  array.unshift(counter);

  console.log(array.slice(0, 9));

  setTimeout(init, 700);
}
