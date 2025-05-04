import { products } from "./data.js";
import makeList from "./tumplats/product.hbs";
console.log(makeList({products}));
document.querySelector("div").innerHTML = makeList({products})