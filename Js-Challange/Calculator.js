import something from "";
function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      throw new Error("Invalid operator");
  }
  return result;
}

const add = calculator(1, 3, "+");
const substraction = calculator(5, 7, "-");
const multipliCation = calculator(10, 30, "*");
const division = calculator(5, 2, "/");
console.log(add);
console.log(substraction);
console.log(multipliCation);
console.log(division);
