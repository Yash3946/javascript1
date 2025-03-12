var company = [
    {
        companyname: "google",
        employees:[
            {
                id:101,
                name:"meet desai",
                salary:25600,
                email:"meet@gmail.com",
                IsMarried:true,
                child:1,
                gender:"male"
            },
            {
                id:102,
                name:"jane",
                salary:22000,
                email:"jane@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            },
            {
                id:103,
                name:"priti",
                salary:27800,
                email:"priti@gmail.com",
                IsMarried:true,
                child:2,
                gender:"female"
            }
        ]
    },
    {
        companyname:"facebook",
        employees:[
            {
                id:201,
                name:"jim",
                salary:24500,
                email:"jim@gmail.com",
                IsMarried:true,
                child:1,
                gender:"male"
            },
            {
                id:202,
                name:"sarah",
                salary:21500,
                email:"sarah@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            },
            {
                id:203,
                name:"akash",
                salary:26200,
                email:"akash@gmail.com",
                IsMarried:true,
                child:2,
                gender:"male"
            }
        ]
    },
    {
        companyname:"amazon",
        employees:[
            {
                id:301,
                name:"ankit",
                salary:26200,
                email:"ankit@gmail.com",
                IsMarried:false,
                child:0,
                gender:"male"
            },
            {
                id:302,
                name:"riya",
                salary:86000,
                email:"riya@gmail.com",
                IsMarried:true,
                child:1,
                gender:"female"
            },
            {
                id:303,
                name:"kriti",
                salary:62500,
                email:"kriti@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            }
        ]
    },
    {
        companyname:"flipkart",
        employees:[
            {
                id:401,
                name:"pooja",
                salary:29800,
                email:"pooja@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            },
            {
                id:402,
                name:"ritesh",
                salary:22500,
                email:"ritesh@gmail.com",
                IsMarried:true,
                child:1,
                gender:"male"
            },
            {
                id:403,
                name:"bhuwan",
                salary:28700,
                email:"bhuwan@gmail.com",
                IsMarried:false,
                child:0,
                gender:"male"
            }
        ]
    }
    
]



// 1.  Find the total number of employees in all companies.
    // const allemployees = company.reduce((sum , emp)=>sum + emp.employees.length,0)
    // console.log(allemployees)

// 2. Find the company where the employee named "riya" works.
    // const findname = company.find((comp)=>comp.employees.find((emp)=>emp.name == "riya")).companyname
    // console.log(findname)

// 3. Calculate the average salary of employees across all companies.
    // const totalsalary = company.reduce((sum , comp)=> sum + comp.employees.reduce((empsum , emp)=>empsum + emp.salary,0),0)
    // console.log("totalsalary : "+totalsalary)
    // const totalemployees = company.reduce((count, comp) => count + comp.employees.length, 0);
    // console.log("totalemployees : "+totalemployees)
    // const findaveragesalary = totalsalary / totalemployees ;
    // console.log("findaveragesalary : " + findaveragesalary)

// 4. Find the names of all employees who are married.
    // const marriedemployeename = company.map((comp)=> comp.employees.filter((emp)=>emp.IsMarried == true).map((empname)=>empname.name))
    // console.log(marriedemployeename)

// 5. Count the total number of children across all employees
        // const totalchildren = company.reduce((sum , comp)=>sum + comp.employees.reduce((childsum,emp)=>childsum + emp.child,0),0)
        // console.log(totalchildren)

// 7. List all female employees.
        // const femaleemployees = company.filter((comp)=> comp.employees.filter((emp)=>emp.gender == "female"))
        // console.log(femaleemployees)

// 8. Count how many employees are not married.
        // const notmarriedemployee = company.reduce((sum , comp)=>sum + comp.employees.reduce((sum , emp)=>sum + (emp.IsMarried === false ? 1 : 0), 0),0);
        // console.log(notmarriedemployee)

// 9. Find the email addresses of all employees earning more than 30,000.
// 10. Identify the total number of employees for each company.