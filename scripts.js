const operate = function(a, operation, b) {
  switch(true) {
    case (operation === 'add'):
      console.log(`We are adding.`);
      return add(a, b);
    case (operation === 'subtract'):
      console.log('We are subtracting.');
      return subtract(a,b);
    case (operation === 'multiply'):
      console.log('We are multiplying');
      return multiply(a,b);
    case (operation === 'divide'):
      console.log("We are dividing");
      return divide(a,b);
    default:
      console.log("I do not recognize that operation");
      return "Error: operation not recognized";
  }
}

const add = function(a,b) {
  return (a + b);
}

const subtract = function(a,b) {
  return (a - b);
}

const multiply = function(a,b) {
  return (a * b);
}

const divide = function(a,b) {
  return b == 0 ? `I can't do that, Dave` : (a / b);
}