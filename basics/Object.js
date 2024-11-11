//oject literals
// //Symbol
// const sym = Symbol("Key1")
// const user={
//     name:"Vandana",
//     [sym]: "Key1",
//     age: 22,
//     state: "UP"
// }
// console.log(user.name)
// console.log(user[sym])
// // If nobody change the anything in the user then use freeze
// user.name="Kritika"
// // Object.freeze(user)
// // user.name="Kunal"
// // console.log(user)
// user.greet=function(){
//     console.log("Hello ji")
// }
// console.log(user.greet());
// ********************** Object2***************
//Singletonn Object
// const name=new Object()
const name={} // Non-singleteon

// console.log(name)
const user={
    email: "abcd@gmail.com",
    fullname:{
        userfullname:{
            fname: "Vandana",
            Lname: "Sharma"
        }
    }
}
// console.log(user.fullname)
const obj1={1:"k", 2:"l"}  
const obj2={3:"m", 4:"n"}  
const obj3=Object.assign({}, obj1,obj2)
// console.log(obj3)



const course={
    name:"Math",
    price: 500,
    
}
const {price}=course
console.log(price)

// const navbar=({company})=>{ // {}curly braces used inside the small bracket beacuse here we defined the navbar 
//     // no need to write separately

// }
// navbar(company="vandu")

// JSON written in this format
// {
//    "name":"Vandana", //we can write both side inside the quote because it is JSON
//    "Price": 5000,
//    "subject": "Math",
// }