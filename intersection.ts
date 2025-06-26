type personTA={name:string}
type personTB={age:number}
type personTC=personTA & personTB;

var personDataA:{name:string}={name:"shivender sharma"}
var personDataB:{age:number}={age:40}

var personDataC:personTC={
    name:"shiva",
    age:50
}
console.log(personDataC)