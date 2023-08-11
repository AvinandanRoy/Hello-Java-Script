// recursion1

function sum(num){
    if(num == 1 ){
        return 1 ;
    }
    else
    return num+sum(num-1);
}

let result = sum(5);
console.log(result);