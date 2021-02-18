const person = {name: "jack William", age: 17, job:"school", phone:"01717000012" }
//const phone = person.phone;
// const age = person.age;
const{phone, age} = person; 


console.log(phone, age);
console.log(phone, age);
console.log(phone, age);


// const {phone} = person;

const complexObject = {
    name: "abc",
    info: {
        address:"dhaka",
        leader: "tiger"
    }
}
// const{leader} = {address: "dhaka", leader:"tiger"}
const {leader} = complexObject.info
