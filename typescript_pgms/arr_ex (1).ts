

// let x:number  //x is declared to store only 1 value
// x=[5,7,8,20] /// ERROR

function arrex()
{

    let y:number[]=[]  //y is declared to store array .... initially empty
    y=[5,7,9,20]   ////  array is also a variable but can store multiple values and values are referred based on index and index starts from 0

    y[0]
    let arr=[9,6,8,20]
    arr.push(30)
    arr.push(45)
    arr.push(15)  ///add value at end of array

    arr.pop()  ///remove the last value

    console.log(arr)
    console.log(arr.length)
    console.log(arr.includes(60))   ///check the array has the value and return true or false
    console.log(arr.indexOf(8))    //return the position the value is found in the array, if not found return -1.
    //// filter, map, foreach, every, some, 
    let arr2=arr.filter(x=>x%2==0)    ///filter all even numbers from arr
    console.log(arr2)

    let arr3=arr.map(x=>x*2)
    console.log(arr3)

    let str=["manish",30,true,"durga","sudha",false,89,45.98,"pranali"]
    let s2=str.filter(s=>typeof s=='string')
    console.log(s2)

    let s3=str.filter(s=>typeof s=='string').map(s=>s.toUpperCase())
    console.log(s3)

    str.forEach(s=>console.log(s))


    console.log(arr.every(x=>x>5))
}

function checkscore()
{
    let score=[62,89,54,90,56]
    let flag=true
    for(let i=0;i<score.length;i++)
    {
        if(score[i]<60)
        {
            flag=false
            break   ///exit from the loop
        }
    }
    if(flag==true)
        console.log("1st class")
    else
        console.log("Not 1st class")


    if(score.every(x=>x>60))
        console.log("All subjects scored >60 so 1st class")
    else
        console.log("Few subjects <60 not 1st class")

    console.log(score.some(x=>x>60))
}

//arrex()
//checkscore()
                                 
let arr=[5,8,2,9,7,12,11]        
//console.log(arr.sort((a,b)=>b-a))
for(let i=0;i<arr.length-1;i++)
{
    if(arr[i]>arr[i+1])
    {
        let t=arr[i]
        arr[i]=arr[i+1]
        arr[i+1]=t
        i=-1
    }
}
console.log(arr)
for(let i=arr[0];i<=arr[arr.length-1];i++)
{
    if(arr.includes(i)==false)
        console.log("missing number : ",i)
}