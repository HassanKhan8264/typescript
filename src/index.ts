console.log("typescript code");

const sum = (a: number, b: number) => {
  return a + b;
};
console.log(sum(2, 2));

let longText: string = "Lon Sentence";
let shortText = longText.slice(0, 10);
console.log(shortText);

let str1: string = "sent one";
let str2: string = "sent two";
let areEqual: boolean = false;

if (str1 === str2) {
  areEqual = true;
}
console.log(areEqual);

let price: number = 20;
let product: string = `laptop`;
let priceAndProduct = `product ${product} is price at ${price}`;

console.log(priceAndProduct, 5 % 2);
// 