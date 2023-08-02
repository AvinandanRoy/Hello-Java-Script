/*
 1 . show output 1 to 150 
 2 . if dividable by 3 ---->foo
 3 . if dividable by 5 ----->bar
 4 . if dividable by 3 and 5 ----> foo bar
*/

for (let i = 1 ; i < 151 ; i++){
    if (i % 5 == 0 && i %3 == 0){
        console.log(i , "foo-bar");
    }
    else if(i % 3 == 0){
        console.log(i ,"foo");
    }
    else if(i % 5 == 0){
        console.log(i, "bar");
    }
}

// create function for foo-bar

function operation(num){
    if (num % 5 == 0 && num %3 == 0){
        console.log("foo-bar");
    }
    else if(num % 3 == 0){
        console.log("foo");
    }
    else if(num % 5 == 0){
        console.log("bar");
    }
     
}

//calling function
operation(50);