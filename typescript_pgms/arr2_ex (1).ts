
let arr=[6,9,10,20,30,"manish",6,20]
arr.push(50)
arr.push(60)
arr.push("hello")
arr.push(10)

console.log(arr)

//tuple
//is also like an array but with fixed values and fixed datatype
let t1:[number,string,string,number,string]
t1=[30,"hello","java",60,"typescript"]

console.log(t1)
//Set  is also similar like array but can have only unique values ..
let s=new Set()  //created empty set and added values
s.add(4)
s.add(50)
s.add(60)
s.add(45)
s.delete(50)

//create a set taking values from array
let s1=new Set(arr)
console.log(s1)

let s2=new Set([5,8,9,20,30,89])
let arr2=[...s2]   ///taking values into array from set  /// ... spread operator
console.log(arr2)

/// map , in the map values are stored like <key><value>

let m=new Map<number,string>()
m.set(100,"durga")
m.set(101,"manish")
m.set(102,"sudha")
m.set(103,"vasu")
m.set(104,"pranali")
m.set(102,"p.sudha")

console.log(m)
console.log(m.get(104))


