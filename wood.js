/*
fixed : wood requirement 

1 . chair ----> 3 cft 
2 . table ----> 10 cft 
3 . bed ------> 50 cft

vary: quantity
*/

function woodCalculate(chair , table , bed ){
    return (chair*3)+(table*10)+(bed*50);
}

const totalWood = woodCalculate(2,2,5);
console.log(totalWood);