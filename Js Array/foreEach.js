let fruits1 = ["Banana","Apple","Orange","Grape","a","b","c","y"];
/*
//foreach
fruits1.forEach((item)=>{
    console.log(item);
});

 //map
fruits1.map((item)=>{
    console.log(item);
})

  //filter
console.log(fruits1.filter((item)=>item.startsWith("1")));
*/
//reduce
let  number =[1,2,3,4,5,6,7,8,9,10]

let sum =number.reduce((t,r)=>{
    return t+r
},0);

console.log(sum);


let onString = fruits1.reduce((t,r)=>{
    return t+" "+r
});
console.log(onString);

