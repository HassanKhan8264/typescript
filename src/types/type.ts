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
let n = true;
if (typeof n === "boolean") {
  console.log(n);
}
function greet(name: any, id: any) {
  console.log("here are these are parameters", `${name} is and  ${id} is `);
  return name + id;
}
greet("hassan", 1);
console.log("these are the arguments");
function calculateAverage(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Input array cannot be empty");
  }

  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return sum / numbers.length;
}

const numbersArray = [1, 2, 3, 4, 5];
try {
  const average = calculateAverage(numbersArray);

  console.log(`The average is: ${average}`);
} catch (error) {
  console.error(error);
}
let a = "ffff";

let message = "Hello Typscript";

// const calculateArea = (length: number, width: number) => {
//   return length * width;
// };
// console.log("THIS IS THE FUNCTION", calculateArea(23, 34));
// optional and defualt parameters in function
console.log('testing');
let message2 = "Hello Typscript"

const calculateArea = (length:number, width:number) => {
  return length * width;
}

console.log('Area: ', calculateArea(23, 34));

// default parameters
const greeting = (name:string,id:number = 1) => {
  return `welcome ${name} and your ${id}`;
}
console.log(greeting('Hello Typscript'));

// optional parameters in function
const optionalParameters = (name:string,id?:number) => {
  if(id){
    return `welcome ${name} and your ${id}`;
  }
  return `welcome ${name}`;
}

console.log(optionalParameters('optional user'));

const arrayOfNumber:number[] = [1, 2, 3, 4, 5]
const calculateAverageNumber = (numbers:number[]) => {
  const sum = numbers.reduce((acc,curr) => acc + curr,0);
  return sum / numbers.length;
}
console.log('Average of array: ', calculateAverageNumber([1, 2, 3, 4, 5]));


const findMaxValue = (number:number[]) => {
  return Math.max(...number);
}
console.log('max value: ', findMaxValue([1,2,3,4,5,6,7,8,8,9,]));
