
class Calculation
{
    add(a:number|string,b:number|string,c?:number|string)   // function overloading
    {
        if(typeof a=="number" && typeof b=="number")
               return typeof c=="number"?a+b+c : a+b
        if(typeof a=="string" && typeof b=="string")
                return typeof c=="string"?a+b+c : a+b
    }
}

let c1=new Calculation()
let total=c1.add(4,6,9)
console.log(total)
total=c1.add(5,10)
console.log(total)

let data=c1.add("hello ","playwright ","programming")
console.log(data)
data=c1.add("hello ","playwright ")
console.log(data)