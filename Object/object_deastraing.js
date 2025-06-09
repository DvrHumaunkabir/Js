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

console.log(thana);
