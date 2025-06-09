let fruits1 = ["Banana","Apple","Orange","Grape","a","b","c","y"];


//console.log(fruits1.indexOf("a"));// koto number index ber kora jai
//console.log(fruits1.length); // koto golu value ase ber kora jai
//console.log(fruits1.includes("Orange")); // true false retrun kore


console.log(fruits1.findIndex(item=>item.startsWith("c")));
console.log(fruits1.find(item=>item.startsWith("O")));
