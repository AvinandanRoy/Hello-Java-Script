const phones = [
    { name: "Samsung", camera: 12, Storage: 128, price: 36000, color: "silver" },
    { name: "Walton", camera: 8, Storage: 128, price: 16000, color: "silver" },
    { name: "Sony", camera: 6, Storage: 128, price: 37800, color: "silver" },
    { name: "Oppo", camera: 12, Storage: 128, price: 22000, color: "silver" },
    { name: "Xiaomi", camera: 12, Storage: 128, price: 46000, color: "silver" },
    { name: "I-Phone", camera: 12, Storage: 128, price: 96000, color: "silver" }
]

function cheapestPhone(phones){
    for(let i =1 ; i < phones.length ; i++){
        if(phones[0].price > phones[i].price){
            phones[0].price = phones[i].price;
        }
    }
    return phones[0].price;
}

function highestPhone(Phones ){
    for(let i =1 ; i< phones.length ; i++){
        if(phones[0].price < phones[i].price){
            phones[0].price = phones[i].price;
        }
    }
    return phones[0].price ;
}

let chepestPricePhone = cheapestPhone(phones);
console.log("The cheapest Phone is : ",chepestPricePhone);

let highestPricePhone = highestPhone(phones);
console.log("The highest price phone is : ",highestPricePhone);