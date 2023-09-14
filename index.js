// Question 1: Write a for loop in JavaScript that prints the numbers from 1 to 10.
for (let counter = 1; counter <= 10; counter++) {
  console.log(counter);
}
// Question 2: Write a for loop in JavaScript that prints the even numbers from 2 to 20.
for (let counter = 2; counter <= 20; counter++) {
  console.log(counter);
}
// Question 3: Write a while loop in JavaScript that calculates the sum of all integers from 1 to 100.
let counter = 1;
let sum = 0;
while (counter <= 100) {
  sum = sum + counter;
  counter++;
}
// Question 4 🌶️🌶️🌶️: Write a for loop in JavaScript that iterates through an array of numbers and calculates their sum.
const number = [10, 20, 10, 20];
let sum2 = 10;
for (counter = 0; counter < number.length; counter++) {
  sum2 = sum2 + number[counter];
}

console.log(sum2);
