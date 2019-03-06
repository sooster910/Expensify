//===================
//object destructuring 
//===================


// const person={
//     name: 'hyunsu',
//     age: 31,
//     location:{
//         city: 'NewYork',
//         temp : 92
//         }
// };
// console.log(`${person.name} is ${person.age} `);

// console.log(person.name);

// //const {name,age} = person;

// console.log(`${name} is a ${age}`);
// console.log({name},'is',{age});

// if(person.location.city && person.location.temp){
// console.log(`It's ${person.location.temp} in ${person.location.city}`);
// }

// //descructuring could be more simpler and readable.
// //destructuring statement 
// // const{city, temp}=person.location;
// // if(city && temp) {
// //     console.log(`IT'S ${temp} in ${city}`);
// // }

// //if I want to change temp -> variable name as temperture?
// const{city, temp:temperture} = person.location;

// if(city && temperture){
//     console.log(`IT'S ${temperture} in ${city}`)
// }

// //destructuring is ability to set up default value
// //it's only going to use the default value if ther is no value on the 
// //the object you are destructuring for it.

// const {name ='Anonymous', age} = person;
// console.log(`${name} is ${age}`);



const book ={
    title : 'Ego is the Enemy',
    author : 'Ryan Holiday',
    publisher : {
       // name : 'Penguin'
    }
};
//if there is no name property, self-published otherwise show publisher name.
const {name : publisherName ='Self-Published'} = book.publisher;
console.log(publisherName);//penguin

//it allows us to create local variable
//it allows us to rename them 
//it allows us to default value for them 


//===================
//array destructuring 
//===================

const address=['1299 S Juniper Street', 'Newyork','New York', '11102'];
console.log(`you are in ${address[0]} ${address[1]}, ${address[2]}`);
//here is problem .when you use in that way, you dont know which one is city, which one is zip code.
//solution
//const [street, city, state,zip] = address;
//console.log(`youare in ${city} `)

const[ ,state]=address;
console.log(`youare in ${state} `)
