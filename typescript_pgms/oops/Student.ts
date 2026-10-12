
class Student
{
    id:number
    sname:string
    course:string
    static college:string

    constructor(id:number,sname:string,course:string,college?:string)
    {
        this.id=id
        this.sname=sname
        this.course=course
        Student.college=college??"JNTU"
    }
    getStudentData()
    {
        console.log(this.id,this.sname,this.course,Student.college)
    }   
}
let s1=new Student(1,"duggar","ECE","KLU")
let s2=new Student(2,"John","IT")


s1.getStudentData()
s2.getStudentData()