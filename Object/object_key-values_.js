let person = {
    fristName:"Humaun kabir",
    lastName :"Kabir",
    age:10,
    city:"Korea",
    isMale:"Male",
    greet :function (){ //  reguller function
        console.log(`hello my name is ${person.fristName} ${person.lastName}`);
    }
}

let {fristName, lastName, age,city,isMale,greet,thana="null"} = person;

/*console.log(thana);
 let key =Object.keys(person);
 console.log(key);

 */

/*let values = Object.values(person);
console.log(values);

 */

let entris = Object.entries(person);
console.log(entris);