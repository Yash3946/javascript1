console.log("basic program");

fullname="patel yash";
console.log(fullname)

x=132;
console.log(x)

// var -->this is global variable,this variable can re-declare and we can update values.
// let -->this variable cannot re-declare but we can update values.
// const-->this variable cannot re-declare and we cannot update values but we have object key so we change keys.
        // (1)
// var age=23;
// var age=23;

         // (2)
// let age=32
// age=23

         // (3)
// const age=23

    // ________________________________________
        // data types in java script
    // ________________________________________

    // primitive data types
// (1)number
// (2)String
// (3)boolean
// (4)undefined
// (5)null
// (6)BigInt
// (7)Symbol


// const student={
//  fullname:"patel yash",
//  age:23,
//  cgpa:8.5,
//  ispass:true,
// };
// console.log(student)
// console.log(student["fullname"]) //find any key or vlaues

// student["age"] = student["age"] + 1;//change key values
// console.log(student["age"])

// student["fullname"] = "patel yash A."
// console.log(student["fullname"])

const product={
 title:"ball pen",
 rating:4,
 offer:"5% off",
 price:270,
};
console.log(product)
console.log(product["rating"]) //find any key or vlaues

product["offer"] ="10% off"
console.log(product["offer"])//change key values

