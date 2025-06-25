console.log("getting info")
function getInfo() {
    

const nameInput =document.getElementById('username') as HTMLInputElement
const userNAme:string = nameInput.value
const emailInput =document.getElementById('email') as HTMLInputElement
const email:string =emailInput.value
const ageInput=document.getElementById('age') as HTMLInputElement
const ageI:string =ageInput.value
console.log(userNAme,email,ageI)
} 