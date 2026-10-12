
function biggest(a:number,b:number,c:number)
{
    if(a>b && a>c)
        console.log(a," is biggest")
    else if(b>c)
        console.log(b," is biggest")
    else
        console.log(c, "is biggest")
}

biggest(6,9,20)
biggest(45,89,23)







let gender="female"
let age=22

// if(gender=="male" && age>=18)
//     console.log("Eligible for 4 wheeler license")
// else if(gender=="female" && age>=20)
//     console.log("Eligible for 4 wheeler license")
// else
//     console.log("No Criteria matched, not eligible")



gender=="male" && age>=18?console.log("Eligible for License") : (gender=="female" && age>=20)?console.log("Eligible for 4 wheeler license"):console.log("Not eligible for license")

let year=2022

year%4==0?console.log("Leap year"):console.log("Not a leap year")

// if(year%4==0)
//     console.log("Leap year")
// else
//     console.log("Not a leap year")

//   condition ? true    :   false