function fruits(){
    return "apple "
}

function Num():number{
  return 34
}
console.log(Num());


function simple(){


}

function complex():number|boolean|string{
    let data=10;
    let name= "shiva"
    let type="age;"
    if(type==="age"){
        return data
    }
    else{
        return name
    }
}

console.log(complex())