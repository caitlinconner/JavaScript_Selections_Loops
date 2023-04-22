console.log("Hello World!\n==========\n");

Exercise 1 Section


for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        continue;
    } else {
        console.log(i);
    }
}

//while below

let i = 1; 

while (i < 100) {
    if (i % 2 == 1) {
        console.log(i)
    }
    i++;
}

// do while below


let x = 1;

do {
    if (x % 2 == 1) {
      console.log(x);
}
    x++;
} while (x < 100);
    


console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i < 100; i++) {
    //only use two conditionals & one console.log
    let output = i;

    if (i % 3 == 0) {
        output += "FIZZ";
    }

    if (i % 5 == 0) {
        output += "BUZZ";
    }

    console.log(output);
}

for (let i = 1; i < 100; i++) {
    console.log(i);

    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, 'FIZZBUZZ');
    } else if (i % 5 == 0) {
        console.log(i, 'BUZZ');
    } else if (i % 3 == 0) {
        console.log(i, 'FIZZ');
    }
}

while below

let i = 1;

while (i < 100) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, 'FIZZBUZZ');
    } else if (i % 5 == 0) {
        console.log(i, 'BUZZ');
    } else if (i % 3 == 0) {
        console.log(i, 'FIZZ');
    }

    i++;
}

let x = 1;

do {
    if (x % 3 == 0 && x % 5 == 0) {
        console.log(x, 'FIZZBUZZ');
    } else if (x % 5 == 0) {
        console.log(x, 'BUZZ');
    } else if (x % 3 == 0) {
        console.log(x, 'FIZZ');
    }
    x++;
} while (x < 100);

exercise 4

let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 1; i <= n; i++) {
    if (i == value) {
        console.log(`Found ${value}!`);
        break;  
    }
    if (i == n){
        console.log(`Did not find ${value} within 1-${n}`);
    }
}

using boolean

let foundValue = false;

for (let i = 1; i <= n; i++) {
    if (i == value) {
        foundValue = true;
        break;
    }
}

if (foundValue) {
        console.log(`Found ${value}!`);
} else {
        console.log(`Did not find ${value} within 1-${n}`);
}

let foundValue;

for (let i = 1; 1 <= n && !foundValue; i++) {
    foundValue = (i == value);
}

 if (foundValue) {
            console.log(`Found ${value}!`);
    } else {
            console.log(`Did not find ${value} within 1-${n}`);
    }



exercise 5

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

for (let i = start; i <= end; i++) {
        console.log(i);
    
        if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
            console.log(i, 'FIZZBUZZ');
        } else if (i % fizzDivisor == 0) {
            console.log(i, 'FIZZ');
        } else if (i % buzzDivisor == 0) {
            console.log(i, 'BUZZ');
        }
    }

    console.log(fizzDivisor, buzzDivisor);