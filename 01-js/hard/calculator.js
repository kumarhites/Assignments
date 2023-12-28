/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num !== 0) {
      this.result /= num;
    } else {
      throw new Error("Cannot divide by zero");
    }
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    const tokens = expression.match(/[0-9]+|[+\-*/()]/g) || [];
    
    try {
      this.result = this.parseExpression(tokens);
    } catch (error) {
      console.error('Error during calculation:', error);
      // throw new Error("Invalid expression");
    }
  }

  parseExpression(tokens) {
    const stack = [];
    const operators = ['+', '-', '*', '/'];

    for (const token of tokens) {
      if (!isNaN(token)) {
        stack.push(parseFloat(token));
      } else if (operators.includes(token)) {
        if (token === '(') {
          stack.push(token);
        } else if (token === ')') {
          this.evaluateStack(stack);
        } else {
          while (operators.includes(stack[stack.length - 1]) && this.precedence(token) <= this.precedence(stack[stack.length - 1])) {
            this.evaluateStack(stack);
          }
          stack.push(token);
        }
      }
    }

    while (stack.length > 1) {
      this.evaluateStack(stack);
    }

    return stack[0];
  }

  precedence(operator) {
    if (operator === '+' || operator === '-') {
      return 1;
    } else if (operator === '*' || operator === '/') {
      return 2;
    }
    return 0;
  }

  evaluateStack(stack) {
    const operator = stack.pop();
    const right = stack.pop();
    const left = stack.pop();

    switch (operator) {
      case '+':
        stack.push(left + right);
        break;
      case '-':
        stack.push(left - right);
        break;
      case '*':
        stack.push(left * right);
        break;
      case '/':
        if (right !== 0) {
          stack.push(left / right);
        } else {
          throw new Error("Cannot divide by zero");
        }
        break;
      default:
        throw new Error("Invalid operator");
    }
  }
}

// Example usage
const calculator = new Calculator();
calculator.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7");
console.log(calculator.getResult());

module.exports = Calculator;
