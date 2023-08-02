// for practicing purpase 

function removeElement(names){
    const uniqueArrayList = [];
    for(let i = 0 ; i < names.length ; i++){
        if(uniqueArrayList.includes(names[i]) == false){
            uniqueArrayList.push(names[i]);
        }
    }
    return uniqueArrayList;
}

const name = ["Krishna" , "lipi" , "shanta" , "pranta" , "avinandan" , "shova" , "shanta", "pancanan" , "khokon" , "tul" , "laz" , "khokon", "debu" , "ronojit" , "debu" , "pancanan" ,"tul" ,"laz"];

const finalArraylist = removeElement(name );

console.log(finalArraylist);