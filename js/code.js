//Question1
let numbers = [4, 6, 8, 9, 11, 14];
console.log(numbers)

//Question 2
let number = numbers.length
console.log(number)

//Question 3
let numb = [4]
console.log(numb)

//Question4
const even = [ 4, 6, 8, 14,]
console.log(even);

const evens = [];
for (const num of numbers) {
    if (num % 2 === 0) {
    evens.push(num);
    }
}

//Question 5
if (numbers.includes(9)) {
    console.log('It does postionIs: ' + numbers.indexOf(9));
}

