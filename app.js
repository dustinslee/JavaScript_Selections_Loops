console.log("Hello World!\n==========\n");
//Wrapped in functions to prevent console clutter
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
  for(let i = 1; i <= 100; i++){
    if (i%2 != 0) {
      console.log(i + " is odd");
    }
  }

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function e2() {
  for(let i = 1; i <= 100; i++) {
    if(i%3 == 0 && i%5 == 0) {
      console.log(i,"FIZZ BUZZ");
    } else if (i%3 == 0) {
        console.log(i,"FIZZ");
    } else if (i%5 == 0) {
        console.log(i,"BUZZ");
    }
  }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function e3a() {
  let i = 1;
  while (i <= 100) {
    if (i%2 != 0) {
      console.log(i + " is odd");
    }
    i++;
  }
}
function e3b() {
  let i = 1;
  while(i <= 100) {
    if(i % 3 == 0 && i % 5 == 0) {
      console.log(i,"FIZZ BUZZ");
    } else if (i%3 == 0) {
        console.log(i,"FIZZ");
    } else if (i%5 == 0) {
        console.log(i,"BUZZ");
    }
    i++
  }
}
function e3c() {
  let i = 1;
  do {
    if (i%2 != 0) {
      console.log(i + " is odd");
    }
    i++;
  } while(i <= 100);
}

function e3d() {
  let i = 1;
  do {
    if(i % 3 == 0 && i % 5 == 0) {
      console.log(i,"FIZZ BUZZ");
    } else if (i%3 == 0) {
        console.log(i,"FIZZ");
    } else if (i%5 == 0) {
        console.log(i,"BUZZ");
    }
    i++
  } while(i <= 100);
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
console.log("N is:",n + " Value is:",value);

if(value > n) {
  console.log("Did not find value");
} else {
    for(let i = 0; i <= n; i++) {
      if(i == value) {
        console.log("Found value:",i);
        break;
      }
    }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function e5() {
  let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
  let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
  let end = Math.round(Math.random() * (1000 - 1) + 1); // creates a random number between 1 and 1000
  let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
  for(let i = start; i <= end; i++) {
    if(i % fizzDivisor == 0 && i % buzzDivisor == 0) {
      console.log(i,"FIZZ BUZZ");
    } else if (i%fizzDivisor == 0) {
        console.log(i,"FIZZ");
    } else if (i%buzzDivisor == 0) {
        console.log(i,"BUZZ");
    }
  }
  console.log("fizzDivisor is:",fizzDivisor + " buzzDivisor is:",buzzDivisor);
  console.log("start is:",start + " end is:",end);
}
