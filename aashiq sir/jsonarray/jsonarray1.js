var students = [
    {
        roll:1,
        name:"guru",
        age:20,
        email:"guru@gmail.com",
        gender:"male"
    },
    {
        roll:2,
        name:"prakash",
        age:21,
        email:"prakash@gmail.in",
        gender:"male"
    },
    {
        roll:3,
        name:"ramesh",
        age:22,
        email:"ramesh@gmail.info",
        gender:"male"
    },
    {
        roll:4,
        name:"priya",
        age:24,
        email:"priya@gmail.com",
        gender:"female"
    },
    {
        roll:5,
        name:"rekha",
        age:35,
        email:"rekha@gmail.com",
        gender:"female"
    }
]

// var x = students.map((stu)=>{
//     return stu.gender.toUpperCase()
// })

// console.log(x);





// var x=students.filter((stu)=>{
//     return stu.gender.toUpperCase()
// })
// console.log(x);


// var x = students.filter((stu)=>{
//     return !stu.email.endsWith(".com")
// })

// console.log(x);

// var x = students.filter((stu) => {
//     return stu.name.startsWith("p")
// })
//     console.log(x);


// var x = students.filter((stu) => {
//     return stu.gender.toUpperCase()
    
//     })
//     console.log(x);

var x = students.map ( (stu) => stu.gender.toUpperCase())

console.log(x)

// var x=students.filter((stu)=>{
//     return stu.gender.toUpperCase()
// })
// console.log(x);





// students.forEach((stu)=>{
//     if(stu.age < 22)
//     {
//         console.log(stu);
        
//     }
// })

// var x = students.filter((stu)=>{
//     return stu.age < 22
// })
// console.log(x);







// console.log(students);
// console.log(students[0].name);


// var x = students.filter((stu)=>{
//     return stu.gender === "female"
// })

// console.log(x);
