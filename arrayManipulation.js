
function processArray(numbers) {
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            result.push(numbers[i] ** 2); 
        } else {
            result.push(numbers[i] * 3); 
        }
    }

    return result;
}


let input = prompt("Enter numbers separated by commas: ");
let numbers = input.split(",").map(Number); 

let processedArray = processArray(numbers);
console.log("Processed Array:", processedArray);

function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase(); 
        } else {
            return str.toLowerCase(); 
        }
    });
}

let stringsInput = prompt("Enter a series of strings separated by commas:");
let stringsArray = stringsInput.split(",").map(str => str.trim());


let numbersInput = prompt("Enter a series of numbers separated by commas:");
let numbersArray = numbersInput.split(",").map(num => parseInt(num.trim(), 10));

const processedNumbersArray = processArray(numbersArray); 
const formattedStringsArray = formatArrayStrings(stringsArray, processedNumbersArray); 

console.log(formattedStringsArray);
alert("Formatted strings: " + formattedStringsArray.join(", "));


