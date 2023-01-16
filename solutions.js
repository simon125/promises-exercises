/**
 * a few simple tasks and exercises to practice working with promises in JavaScript
 */

/**
 * Create a function that takes in a number and returns a promise
 * that resolves to the square of that number after a 2 second delay
 */

function squareAfterDelay(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number * number);
    }, 2000);
  });
}

squareAfterDelay(4).then((squaredValue) => {
  console.log(`Squared value ${squaredValue}`);
});

/**
 * Create a function that returns a promise that resolves to the current time after a 1 second delay.
 */

function getTimeAfterDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Date().toTimeString());
    }, 1000);
  });
}

getTimeAfterDelay().then((timeAfterDelay) => {
  console.log(timeAfterDelay);
});

/**
 * Create a function that takes in a number and returns a promise
 * that resolves to the number, but rejects if the number is less than 10.
 */

function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if (number < 10) {
      reject("Number is less than 10");
    } else {
      resolve(number);
    }
  });
}

checkNumber(13)
  .then((number) => {
    console.log(`Hurra you did it! you entered number: ${number}`);
  })
  .catch(() => {
    console.log("You have entered number smaller than 10");
  });

/**
 * Create a function that takes in a number and returns
 * a promise that resolves to the number multiplied by 2 after a 3 second delay.
 */

function doubleAfterDelay(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number * 2);
    }, 3000);
  });
}

doubleAfterDelay(20).then((doubledNumber) => {
  console.log(`Doubled number equates: ${doubledNumber}`);
});

/**
 * Create a function that returns a promise that resolves to a random number between 1 and 10 after a 2 second delay
 */

function getRandomNumberAfterDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 10) + 1);
    }, 2000);
  });
}

getRandomNumberAfterDelay().then((yourRandomNumber) => {
  console.log(`your random number equates ${yourRandomNumber}`);
});

/**
 * Create a function that takes in a string and returns
 * a promise that resolves to the length of that string after a 1 second delay.
 */

function getStringLengthAfterDelay(str) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(str.length);
    }, 1000);
  });
}

getStringLengthAfterDelay("trelemorele").then((stringLength) => {
  console.log(`length of passed string is: ${stringLength}`);
});

/**
 * Create a function that takes in a boolean value and returns a promise that resolves with the
 * string "True" if the input value is true, or "False" if the input value is false.
 */

function getStringValue(value) {
  return new Promise((resolve) => {
    resolve(value ? "True" : "False");
  });
}

getStringValue(false).then(console.log);

/**
 * Create a function that takes in two numbers and returns a promise that resolves with the result of
 * dividing the first number by the second after a 3 second delay.
 * If the second number is 0, the promise should reject with an error message.
 */

function divideAfterDelay(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b === 0) {
        reject("Cannot divide by zero");
      } else {
        resolve(a / b);
      }
    }, 3000);
  });
}

divideAfterDelay(50, 0)
  .then((results) => {
    console.log(`You did it! the result of division is: ${results}`);
  })
  .catch(() => {
    console.log("Oh no something went wrong!");
  });

divideAfterDelay(50, 10)
  .then((results) => {
    console.log(`You did it! the result of division is: ${results}`);
  })
  .catch(() => {
    console.log("Oh no something went wrong!");
  });

/**
 * Create a function that takes in an array of numbers and returns a promise that resolves
 * with the sum of all the numbers in the array after a 1 second delay.
 */

function getSumAfterDelay(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const sum = numbers.reduce((total, num) => total + num, 0);
      resolve(sum);
    }, 1000);
  });
}

getSumAfterDelay([1, 2, 3, 4]).then((sum) => {
  console.log(`Sum of passed numbers in array equates: ${sum}`);
});
