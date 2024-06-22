// myAge is my age.
var myAge = 23;

// first 2 years of a dogs life is different from the rest. We used var for that reason and declared the variable 2 for the years.
var earlyYears = 2;
earlyYears *= 10.5;

// plugged myAge - 2 to declare the laterYears variable
var laterYears = myAge - 2;

// plugged laterYears * 4 to calculate the number of dog years accounted for my later years
laterYears *= 4;

// added the two variables together to get my age in dog years
var myAgeInDogYears = earlyYears + laterYears;

// declared the variable with myName, then used .tolowercase on the next line to make all letters lowercase.
var myName = 'Robert';
var myName = myName.toLowerCase();

// used string interpolation to plug in all the variables.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
