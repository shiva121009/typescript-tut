class Product{
    name:string;
    price:number;
    pID:number;
    inCart=false;
    isOrdered=false;

    constructor(name:string,price:number,pID:number)
  {  this.name=name;
    this.price=price;
    this.pID=pID
}
addToCart():void{
   this.inCart=true
}

buyProduct(){
    if(this.inCart){
       return `prodict ${this.name} is ordered in ${this.price}`
    }
    else{
        return `no product in cart`
    }
}




}

var product =new Product("Samsung",10000,101)
product.addToCart()
console.log(product.buyProduct())


var product =new Product("IPHONE",1000000,101)
product.addToCart()
console.log(product.buyProduct()) 