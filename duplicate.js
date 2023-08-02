// Remove duplicate items from an array

const name = ["Krishna" , "lipi" , "shanta" , "pranta" , "avinandan" , "shova" , "shanta", "pancanan" , "khokon" , "tul" , "laz" , "khokon", "debu" , "ronojit" , "debu" , "pancanan" ,"tul" ,"laz"]; 

function removeDuplicate(names){
    const unique = [];
    for(let i = 0 ; i < names.length ; i++){

        if(unique.includes(names[i]) == false){
            unique.push(names[i]);
        }
    }
    return unique;
}

// function calling 
const notDuplicate = removeDuplicate(name);
console.log(notDuplicate);