import {Page} from "@playwright/test"

function add(x:number,y:number)
{
   console.log(x+y)
}

add(6,9)  //calling the function  2 times 
add(20,30)


export async function handlealert(page:Page,text:string)
{
     await page.on("dialog",(d)=>{
       console.log(d.message())
       d.accept()
   })
}