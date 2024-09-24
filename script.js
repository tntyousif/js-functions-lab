/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));


  //ex2
/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/
function isAdult(number) {
    if (number >= 18){
        return ("isAdult");
    }
    else{
        return('Minor');
    }
}


console.log('Exercise 2 Result:', isAdult(21));


//ex3
/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

function isCharAVowel(char){
    if (char=== "a"|| char=== "e"|| char=== "i"|| char=== "o"|| char=== "u"){
        return ("true");
    }
    else{
        return("false");
    }
}

console.log('Exercise 3 Result:', isCharAVowel("a"));


//ex4 
/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

function generateEmail(name, domain){
    return name +"@"+ domain;
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


//ex5
/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

const greetUser = (uName,dTime) => `Good ${dTime}, ${uName}!`

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));


//ex6
/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

function maxOfThree (num1,num2,num3){
    if(num1 > num2 && num3) {
        return (num1);
    }
    else if(num2 > num1 && num3) {
        return (num2);
    }
    else (num3 > num1 && num2) 
        return (num3);
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));


//ex7
/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

function calculateTip(bill, tipPer){
    return (bill*tipPer/100);
}

console.log('Exercise 7 Result:', calculateTip(50, 20));


//ex8
/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

function convertTemperature(temp,scale){
    if (scale ==="c"){
        return(`${(temp*9/5)+32} (Fahrenheit).`);
    }
    else {
        return(`${(temp-32)*5/9} (Celsius).`)
    }
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));


//ex9



//ex10