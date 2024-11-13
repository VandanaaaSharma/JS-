function name(){
    console.log("C")
    console.log("A")
    console.log("R")
}
//name()
// function twono(N1,N2){  //Here N1 and N2 are parameters
//     console.log(N1 + N2)
// }
// retrun ke baad kuch print nhi hoga uss loop mein
//twono(4,5) // 4,5 are aruguments

//UserMessage
function user(name){
    return`${name} just logged in`
}
// console.log(user("vandana"))

//dont know the how many arguments are coming
function price(...num1){  // REST operator Rest operator and spread operator are same
    return num1
}
// console.log(price(200,400,500))
function object(anyobj){
    console.log(`name is ${anyobj.name} and price is ${anyobj.price}`)
}
// object(name)
object({
    name:"vandana",
    price: 200
})

