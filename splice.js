// splice is a causine of slice  :)

// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// its change the original array 

const splicingArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20];

const newArray = splicingArray.splice(3 , 10);

console.log(newArray);
console.log(splicingArray);