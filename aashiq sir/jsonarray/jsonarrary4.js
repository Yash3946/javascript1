var company = [
    {
      companyname: "Tech Solutions",
      employees: [
        {
          id: 1,
          name: "John Smith",
          age: 35,
          position: "Software Engineer",
          email: "john.smith@techsolutions.com",
          phone: "555-1234",
          salary: 85000
        },
        {
          id: 2,
          name: "Emily Davis",
          age: 29,
          position: "QA Engineer",
          email: "emily.davis@techsolutions.com",
          phone: "555-5678",
          salary: 62000
        }
      ],
    },
    {
      companyname: "Marketing Masters",
      employees: [
        {
          id: 1,
          name: "Sophia Brown",
          age: 32,
          position: "Marketing Manager",
          email: "sophia.brown@marketingmasters.com",
          phone: "555-2345",
          salary: 75000
        },
        {
          id: 2,
          name: "James Taylor",
          age: 28,
          position: "Social Media Analyst",
          email: "james.taylor@marketingmasters.com",
          phone: "555-6789",
          salary: 55000
        }
      ],
    },
    {
      companyname: "Data Dynamics",
      employees: [
        {
          id: 1,
          name: "Liam Wilson",
          age: 40,
          position: "Data Scientist",
          email: "liam.wilson@datadynamics.com",
          phone: "555-3456",
          salary: 95000
        },
        {
          id: 2,
          name: "Olivia Johnson",
          age: 27,
          position: "Data Analyst",
          email: "olivia.johnson@datadynamics.com",
          phone: "555-9876",
          salary: 67000
        }
      ],
    },
    {
      companyname: "Eco Innovations",
      employees: [
        {
          id: 1,
          name: "Noah Green",
          age: 38,
          position: "Sustainability Consultant",
          email: "noah.green@ecoinnovations.com",
          phone: "555-1111",
          salary: 87000
        },
        {
          id: 2,
          name: "Emma White",
          age: 30,
          position: "Environmental Analyst",
          email: "emma.white@ecoinnovations.com",
          phone: "555-2222",
          salary: 68000
        }
      ],
    },
    {
      companyname: "Healthcare Hub",
      employees: [
        {
          id: 1,
          name: "Ethan Martinez",
          age: 45,
          position: "Medical Researcher",
          email: "ethan.martinez@healthcarehub.com",
          phone: "555-3333",
          salary: 98000
        },
        {
          id: 2,
          name: "Ava Rodriguez",
          age: 34,
          position: "Clinical Specialist",
          email: "ava.rodriguez@healthcarehub.com",
          phone: "555-4444",
          salary: 79000
        }
      ],
    }
  ]



//(1)   Extract and display only the companyName fields from the JSON array.

    // var allcompanyname = company.map((comp)=>comp.companyname)
    // console.log(allcompanyname)

// (2)  Find employees earning more than $80,000. (*)
// Count the total number of employees in all companies.

    var employeessalary = company.map((comp)=>comp.employees.filter((emp)=>emp.salary > 80000))
    console.log(employeessalary)

// (3) Count the total number of employee objects across all companies.
// Find the position of an employee named "Emily Davis".
    
    // var totalEmployees = company.reduce((count, comp) => count + comp.employees.length, 0);
    // console.log("Total number of employees:", totalEmployees);

    // var findname = company.filter((comp)=>comp.employees).filter((na)=>na.name =="Emily Davis")
    // console.log(findname)

