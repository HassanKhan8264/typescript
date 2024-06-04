console.log("type file");
function isDvidibleBy4And8(a: number) {
  return a % 4 === 0 && a % 8 === 0;
}

let b = isDvidibleBy4And8(32);
console.log("function output", b);
let number = Number.MAX_SAFE_INTEGER;
console.log(number);
let bigNumber: bigint = 9007199254740991n;

let anOtherBigNumber: bigint = 900719925474099234234324423n;
console.log(bigNumber + anOtherBigNumber);
