const  now = new Date();
console.log(`${now}`);
console.log(`${now.getDate()}`);
console.log(`${now.getDay()}`);
console.log(`${now.getMonth()}`);
console.log(`${now.getFullYear()}`);
console.log(`${now.getHours()}`);
console.log(`${now.getMinutes()}`);
console.log(`${now.getSeconds()}`);
console.log(`${now.getMilliseconds()}`);



const pastDate = new Date("2020-01-22");
const diffarent = now - pastDate;
console.log(pastDate);
const mili =Math.floor(diffarent/(1000*60*60*24));
const month =Math.floor(diffarent/(1000*60*60*24*365));

console.log(month);
