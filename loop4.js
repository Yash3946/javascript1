            //(1) for-loop(print any word 5 times)
// -----------------------------------------------------

// for(let i=1;i<=5;i++)
// {
//     console.log(i," = yash")
// }

            //calculate sum of 1 to 5
// -----------------------------------------------------

// let sum=0;
// for(let i=1;i<=5;i++)
// {
//     sum = sum + i;
// }
// console.log("sum of 1 to 5 is = ",sum)


            //(2) while-loop(print any word 5 times)
// -----------------------------------------------------
// let i=1;
// while (i <= 5)
// {
//     console.log("yash");
//     i++;
// }


            //(3) do-while loop(print any word 5 times)
// -----------------------------------------------------

// let i=1;
// do{
//     console.log("yash")
//     i++;
// }
// while(i<=20);

         //(4) for of loop
// -----------------------------------------------------

// let str="patel";

// for(let i of str)
// {
//     console.log("i = ",i)
// }


// let str="patel";
// let length = 0;

// for(let i of str)
// {
//     console.log("i = ",i)
//     length++
// }
// console.log("string length is ",length);


         //(5) for in loop(retuen keys name)
// -----------------------------------------------------

// let student = {
//     name :"jalay panchal",
//     age:19,
//     cgpa:8.7,
//     ispass:true,
// };

// for (let key in student)
// {
// //    // console.log("key is",i);
//     console.log("key = ",key,"value = ",student[key]);

// }

// -----------------------------------------------------
            // print all even numbers form 0 to 100

            // for(let i=0;i<=100;i++)
// {
//     if(i % 2 == 0)
//     {
//         console.log(i)
//     }
// }

// -----------------------------------------------------

let GameNumber = 46;
let UserNumber = prompt("guess the game number");

while(UserNumber != GameNumber)
{
    UserNumber=prompt("you entered wrong number,guess again : ");
}
console.log("congratulations , you entered the right number");
