"use strict";

//const med tomt array
const array = [];

//let med en tæller der starter på 0
let counter = 0;

init();

function init() {
  //tælleren skal plusse/tilføje med 1 hver gang
  counter += 1;

  //arrayet skal tilføje tallene fra tælleren i STARTEN af arrayet
  array.unshift(counter);

  //consollen skal kun vise fra index [0] til [9] af arrayet
  console.log(array.slice(0, 9));

  setTimeout(init, 700);
}
