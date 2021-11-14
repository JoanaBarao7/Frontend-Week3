/* 1.	Create an array called ages that contains the following 
values: 3, 9, 23, 64, 2, 8, 28, 93.*/

//  let ages = [3,9,23,64,2,8,28,93];

/* a.	Programmatically subtract the value of the first element in the 
array from the value in the last element of the array (do not use 
numbers to reference the last element, find it programmatically, 
ages[7] – ages[0] is not allowed). Print the result to the console.*/

// console.log (ages[ages.length -1] - ages[0]);



/* b.	Add a new age to your array and repeat the step above to ensure
 it is dynamic (works for arrays of different lengths).*/

// ages.push(35);
// console.log (ages[ages.length -1] - ages[0]);


/* c.	Use a loop to iterate through the array and calculate the average
 age. Print the result to the console. */

// let total = 0;

// for(let i = 0; i < ages.length; i++){
//     total += ages[i];   
// }

//     let avg = total / ages.length;
//     console.log(avg);



/* 2.	Create an array called names that contains the following values: 
‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.*/

// let names = ['Sam','Tommy','Tim','Sally', 'Buck', 'Bob'];

/* a.	Use a loop to iterate through the array and calculate the average
number of letters per name. Print the result to the console.*/

// let total = 0;

// for(let i = 0; i < names.length; i++){
//     total += names[i].length;   
// }
// let avg = total/names.length;
// console.log(avg);


/* b.	Use a loop to iterate through the array again and concatenate all
the names together, separated by spaces, and print the result to 
the console. */

// concatenation = 0;
// for(let i=0; i < names.length; i++){
//   concatenation = names.join(' ');
// }
// console.log(concatenation);


/* 5.	Create a new array called nameLengths. Write a loop to iterate
over the previously created names array and add the length of
each name to the nameLengths array. */


  
// let nameLengths = [0];

// for (let i = 0; i < names.length; i++) {
//       nameLengths = names.map(function(element){
//         return element.length;
//       })  
//     }
//     console.log(nameLengths);



/* 6.	Write a loop to iterate over the nameLengths array and calculate
 the sum of all the elements in the array. Print the result to 
 the console. */

// let sum = nameLengths.reduce(function(previousValue, currentValue){
//   return previousValue + currentValue;
// })
// console.log(sum);

/* 
    7.	Write a function that takes two parameters, word and n, 
    as arguments and returns the word concatenated to itself n 
    number of times. (i.e. if I pass in ‘Hello’ and 3, I would 
      expect the function to return ‘HelloHelloHello’). */

   //  function stringRepeat(word, n) {
   //     let result = "";
   //     for(let i = 0; i < n; i++){
   //          result += word;
   //     }
   //     return result;
   //  } 
   //  console.log(stringRepeat("Hello", 3));

    
   // 8.	Write a function that takes two parameters, firstName and
   //  lastName, and returns a full name (the full name should be 
   //    the first and the last name separated by a space).

    // function fullName(firstName, lastName) {
    //     return firstName + " " + lastName;
    // }
    //     console.log(fullName("Joana", "Barao"));


   //  9.	Write a function that takes an array of numbers and 
   //  returns true if the sum of all the numbers in the array 
   //  is greater than 100.

    // let arr =[6, 7, 2];
    // function sum(arr) {
    //     let sum = 0;
    //     for (let i = 0; i <arr.length; i++)
    //     sum += arr[i];
        
    //     if (sum <100){
    //         return true;
    //     }   
             
    // }
    // console.log(sum(arr));


   /*  10.	Write a function that takes an array of numbers and 
    returns the average of all the elements in the array. */

    // let numbers = [6,3,3];
    // let sum = numbers.reduce(myFunction);
    
    // function myFunction(total, value) {
    //   return total + value;
    // }
    // console.log (sum / numbers.length);

    
/* 11.	Write a function that takes two arrays of numbers and 
returns true if the average of the elements in the first array
is greater than the average of the elements in the second array. */


    // let array1 = [5,5,5];
    // let sum1 = array1.reduce(myFunction1);
    
    // function myFunction1(total, value) {
    //   return total + value;
    // }
    // let array2 = [3,3,3];
    // let sum2 = array2.reduce(myFunction2);
    
    // function myFunction2(total, value) {
    //   return total + value;
    // }
    
    // avg1 = sum1 / array1.length;
    // avg2 = sum2 / array2.length;

    // if (avg1 > avg2) {
    //     console.log (true);
    // }


   /*  12.	Write a function called willBuyDrink that takes a boolean
     isHotOutside, and a number moneyInPocket, and returns true if
      it is hot outside and if moneyInPocket is greater than 10.50. */

    // let isHotOutside = true;
    // let moneyInPocket = 10.66;

    // function willBuyDrink(isHotOutside, moneyInPocket) {
    //     if (isHotOutside == true && moneyInPocket > 10.50){
    //     return true;
    // }
    // }
    //     console.log(willBuyDrink(isHotOutside, moneyInPocket));


 /*    13.	Create a function of your own that solves a problem. 
    In comments, write what the function does and why you created it. */

    /* Write a function called walletMoney, that takes a variable shirtPrice 
    and a number money and returns if you could afford to pay for it or not. */
   /*The walletMoney function compares the value of money to the shirtPrice and 
   with the if statements will let us know if it can be bought or not*/
   
   //   let money = 150.00;
   //   let shirtPrice = 100.00;
     

   //   function walletMoney (shirtPrice, money){
   //       if(money >= shirtPrice){
   //          return ("You bought a Nike Shirt!!");   
   //       } 
   //          return ("It's too expensive!");
   //       }
   //       console.log(walletMoney(shirtPrice, money));




  

  

