type datatype={name:string,email:string}

type a={name:string}
type b={email:string}
type c =a|b
 
var empData1:c={
    name:"shivender sharma",
    email:"shivasharma@gmail.com",

}
var studentData1:c={
    name:"shiva",
    email:"shiva@gmail.com"
}

console.log(empData1,studentData1)