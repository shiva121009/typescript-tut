"use strict";
console.log("getting info");
function getInfo() {
    const nameInput = document.getElementById('username');
    const userNAme = nameInput.value;
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const ageInput = document.getElementById('age');
    const ageI = ageInput.value;
    console.log(userNAme, email, ageI);
}
