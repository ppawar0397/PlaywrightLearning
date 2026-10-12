
class Employee
{
   empid:number
   empname:string
   desig:string
   phone:string
  
   constructor(empid:number,ename:string,desig:string,phone:string)
   {
      this.empid=empid
      this.empname=ename
      this.desig=desig
      this.phone=phone
   }
   getEmpData()
   {         
      console.log(this.empname)
   }
}

let e1=new Employee(1,"john","Sr. Lead","405789889")
let e2=new Employee(2,"duggar","Manager","506789323")

e1.getEmpData()
e2.getEmpData()
