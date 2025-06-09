let person = {
    fristName:"Humaun",
    lastName :"Kabir",
    age:10,
    city:"Korea",
    isMale:"Male",
    greet :()=>{ //  reguller function
        console.log(`hello my name is ${this.fristName} ${this.lastName}`);
    }
}

person.greet()

