let hello = "      hellon  world";
console.log(hello);
let hello1 = "world";
let hello2 = 'hellon';

//let hello3 = `${hello1} ${hello2}`;



//console.log(hello3.length);  //length

console.log(hello.toLowerCase());  //
console.log(hello.toUpperCase());  //
console.log(hello.charAt(3));      // index key
console.log(hello.charCodeAt(6));  //unicode


console.log(hello.indexOf("o")); //frist index
console.log(hello.lastIndexOf('l')); // last index
console.log(hello.includes("o"));  // true false
console.log(hello.startsWith("o"));  // frist te thakle  true false

console.log(hello.slice(1,2)); // index kete neye asha jai
console.log(hello.slice(-2,-1)); // last negetive

console.log(hello.substring(1,2)); // same work

console.log(hello.trim()); // speahs cut
console.log(hello.replace("hellon", "Salman"));

let city ="San Francisco Aust ralia";
let  result = city.split(" "); // speach array
console.log(result);


console.log(city.search("Aust"));  // index number
console.log(city.match(/Sn/));  // nul // macht array result




