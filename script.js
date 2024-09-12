console.log('Hello Africa🌍');

// Logical Operators

// && --> Logical AND - Ampersand

const isAdult = true;
const hasTicket = true;

console.log(isAdult && hasTicket);

const a = true;
const b = false;

console.log(a && b);

// || --> Logical OR

const c = false;
const d = true;

console.log(c || d);

//  ! --> Logical NOT

const e = true;
console.log(!e);

// If and Else statement

const temperature = 23;

if (temperature > 25) {
    console.log('Temperature Today is hot');
} else if(temperature == 25) {
    console.log('oops');
} else {
    console.log('Temperature Today is cool');
}

const OG = true;
const tall = false;
const gold = true;

if(OG && tall && gold) {
    console.log('OG is tall');
} else if (!OG || tall && gold) {
    console.log('OG is short')
} else {
    console.log('OG Porero');
}

const number = 0;

if (number < 0) {
    console.log('Negative Number');
} else if (number > 0) {
    console.log('Positive Number');
} else {
    console.log('Number is Zero');
}

const digit = -2;

if (digit < 0) {
    console.log('Negative Number');
} else if (digit > 0) {
    console.log('Positive Number');
} else {
    console.log('Number is Zero');
}

// Class-Work

// Write a simple if-else statement to check if a person is old enough to vote

const votingAge = 26;

if (votingAge >= 18) {
    console.log('Applicant is Eligible');
} else {
    console.log('Appliant is not Eligible');
}

// An if-else statement to check if the number is divisible by 3 and 5

const numberToCheck = 17;

if (numberToCheck % 3 == 0 && numberToCheck % 5 == 0) {
    console.log('The number is divisible by 3 and 5');
} else {
    console.log('The number is neither divisible by 3 nor by 5');
}


// Switch Statement.

const day = 'Friday';

switch (day) {
    case 'Monday':
        console.log('Start Of The Work Week!');
        break;
    case 'Tuesday':
        console.log('Have A Great Day!');
        break;
    case 'Wednesday':
        console.log('Have A Great Day!');
        break;
    case 'Thursday':
        console.log('Have A Great Day!');
        break;
    case 'Friday':
        console.log('Almost The Weekend!');
        break;
    case 'Saturday':
        console.log('Enjoy Your Weekend!');
        break;
    case 'Sunday':
        console.log('Enjoy Your Weekend!');
        break;
        default:
            console.log('Day Not Found!');
}
