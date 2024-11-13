const user= {
    username:"vanndana",
    price:99,
    message: function() {
        // console.log(`${this.username},welcome to website`)
     //   console.log(this)
    }
}
// user.message()
// user.username="kunal"
// user.message()
// console.log(this)
// const one=function(){
//     let username="vandana"
//     console.log(this.username)
// }
// one()
//arrow function
// const one=()=>{
//     let username="vandana"
//     console.log(this)
// }
// one()
// basic arrow function
const add=(num1,num2)=>{
    return num1+num2
}
console.log(add(4,5))
//implicit arrow
const add1=(num1,num2)=> num1+num2  //{}curly braces mein retun keyword use krenge ootherwise nhi
// console.log(add1(4,5))
const add2=(num1,num2)=> (num1+num2 ) 
console.log(add1(4,5))

