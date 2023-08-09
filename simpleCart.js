const shoppingCart =[
    {Name : "Shoe" , price : 1200},
    {Name : "pant" , price : 1200 },
    {Name : "T-shirt" , price: 1300},
    {Name : "Belt" , price : 500}
]

function totalCoast(products){
    let sum = 0 ;
    for(let  i =0 ; i < products.length ; i++){
        sum += products[i].price;
    }
    return sum ;
}

let result = totalCoast(shoppingCart);
console.log("Your total bill is :",result);