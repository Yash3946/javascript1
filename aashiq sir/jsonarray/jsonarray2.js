var products = [
    {
        id:101,
        name:"Iphone",
        category:"Mobile",
        price:100001,
        color:["red","black","blue","green","yellow"],
        isAvailable:true,
        details:{
            description:"Apple iPhone 13 Pro Max",
            weight:1500,
            screenSize:6.1,
            batteryLife:48,
        }
    },
    {
        id:102,
        name:"Samsung Galaxy S21 Ultra",
        category:"Mobile",
        price:75000,
        color:["white","black","blue","green"],
        isAvailable:false,
        details:{
            description:"Samsung Galaxy S21 Ultra 5G",
            weight:1600,
            screenSize:6.7,
            batteryLife:45,
        }

    },
    {
        id:103,
        name:"Dell laptop",
        category:"Laptop",
        price:85000,
        color:["white","black","blue","aqua"],
        isAvailable:false,
        details:{
            description:"widows with tablets",
            weight:1400,
            screenSize:6.4,
            batteryLife:42,
        }

    }
]


//  (1)  fine only total mobile price 

// var mobiletotalprice = products.filter((prod)=>prod.category === "Mobile").reduce((sum,mob)=>sum + mob.price,0)
// console.log(mobiletotalprice)

//  (2)  find only laptop details screenSize

// var laptopScreenSize = products.filter((prod) => prod.category === "Laptop").map((prod) => prod.details.screenSize);
// console.log(laptopScreenSize)

//  (3)  find only laptop details batteryLife

// var laptopbatterylife = products.filter((prod)=>prod.category === "Laptop").map((prod)=>prod.details.batteryLife)
// console.log("batterylife : "+laptopbatterylife);

//  (4)  find only laptop price

// var laptopprice = products.filter((prod)=>prod.category === "Laptop").map((prod)=>prod.price)
// console.log(laptopprice)
