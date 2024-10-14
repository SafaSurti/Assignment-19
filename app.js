//                                      QUESTION 31-34
//                                      DATE AND TIME
//                                       ANSWER NO 1:
// dObj = new Date();
// console.log(dObj);
//                                       ANSWER NO 2:
// let dStr = new Date().toString();
// console.log(dStr);
//                                       ANSWER NO 3:
// let day = new Date();
// d =day.getDay()
// console.log(d);
//                                       ANSWER NO 4:
// let date = new Date();
// d = ["sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Satueday"];
// var day =d.getday();
// console.log(day);








//                                       CHAPTER 35-38
//                                         FUNCTION
//                                        ANSWER NO 1:
// var date = new Date()
// document.write(date);
//                                        ANSWER NO 2:
// function greetUser(firstName, lastName) {
//     var fullName = `${firstName} ${lastName}`;
//     console.log( `${fullName}`);
// }
// greetUser("Safa","Mushtaq"); 
//                                        ANSWER NO 3:

// function num(num1 , num2) {
//     var num1 =+prompt("Enter first number");
//     var num2 =+prompt("Enter second number");
// var result = num1 + num2;
// return result;
// }
// let sum = num();
// alert(sum);
//                                        ANSWER NO 4:
// function calculator(num1, num2, operator) {
//     let result;

//     switch(operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             if (num2 !== 0) {
//                 result = num1 / num2;
//             } else {
//                 result = "Error: Division by zero";
//             }
//             break;
//         case '%': 
//             result = num1 % num2;
//             break;
//         default:
//             result = "Invalid operator";
//     }

//     return result;
// }
// let num1 = parseFloat(prompt("Enter the first number:"));
// let num2 = parseFloat(prompt("Enter the second number:"));
// let operator = prompt("Enter the operator (+, -, *, /, %):");

// let result = calculator(num1, num2, operator);
// alert("The result is: " + result);


// function xy (num1 , num2 , operator) {
//     if (condition) {
        
//     }
    
// }
//                                        ANSWER NO 5:

// function square(num) {
//     return num * num;
// }
// let result = square(2);
// console.log(result); 
