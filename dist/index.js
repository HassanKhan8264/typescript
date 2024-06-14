"use strict";
console.log("typescript code");
const sum = (a, b) => {
    return a + b;
};
console.log(sum(2, 2));
let longText = "Lon Sentence";
let shortText = longText.slice(0, 10);
console.log(shortText);
let str1 = "sent one";
let str2 = "sent two";
let areEqual = false;
if (str1 === str2) {
    areEqual = true;
}
console.log(areEqual);
let price = 20;
let product = `laptop`;
let priceAndProduct = `product ${product} is price at ${price}`;
console.log(priceAndProduct, 5 % 2);
