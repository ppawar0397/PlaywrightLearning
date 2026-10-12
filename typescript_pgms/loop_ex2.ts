
let n=9
for(let i=1; i<=10; i++)
{
    console.log(n,"*",i,"=",n*i)
}
//   9   *  1 = 9

//  1  1  2   3  5  8  13..........200        
let a,b,c
a=1,b=1,c=a+b
console.log(a)
console.log(b)
while(c<=200)
{
    console.log(c)
    a=b
    b=c
    c=a+b
}