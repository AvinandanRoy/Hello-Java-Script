const country = "Bangladesh";
const age = 22 ;
const isIndependent = true ; 
const student = {Id : 221154899 , Name : "Avi"};
const studentAge = [12, 13, 14, 15, 16, 17,18, 19, 20];

function add(num1 , num2 ){
    return num1 +num2 ;
}

console.log(typeof(country));
console.log(typeof(age));
console.log(typeof(isIndependent));
console.log(typeof(student));
console.log(typeof(studentAge));
console.log(typeof(add));

// for array checking we use ----
console.log(Array.isArray(studentAge)); // this is true 

//now we can check object with this funtionality
console.log(Array.isArray(student)); // this is false 

// therefore when we check is it array or it is not , then we can use  ------> Array.isArray(arrayName)

// when , we need to check from array a specific element , then we use like this operation --->

console.log(studentAge.includes(15)); // it gives true 

console.log(studentAge.includes(90)); // it gives false , cause the element of "90" isn't wxist in "studentAge "

// concat ------>

const oldFriend = ["raj" , "hasib" , "Saikat" , "Shahitto" , "Shanta" , 'Ritu' , "Shovon"];

const newFriend = ["Shajon" , "Sani" , "Wasi"];

const allFriends = oldFriend.concat(newFriend);
console.log(allFriends);

const allFriends1 = newFriend.concat(oldFriend);
console.log(allFriends1);