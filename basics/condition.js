// const score=200
// if(score>100){
//     const power="abc"
//     console.log(`User Power:${power}`)
// }
 const balance=1000
// if(balance>500) console.log("test") //implicit scope

//Nested
// if(balance<500){
//     console.log("less")
// }else if(balance<750){
//     console.log("less 750")
// }else{
//     console.log("less 1200")
// }
// for ecommerce
const loogedin=true
const debitcard=true
const loggedemail=true
const loggedgoogle=true
// if(loogedin && debitcard && 2==3){
//     console.log("Allow")
// }
// if(loggedgoogle || loggedemail){
//     console.log("user logged in")
// }

// switch(key){
//     case value:
//     break;
//     default:
//         break;
// }

const month=3
switch (month) {
    case 1:
        console.log("jan")
        
        break;
    case 2:
        console.log("feb")
            
        break;
    case 3:
        console.log("mar")
                
        break; 

    default:
        break;
}

// false value
// false, 0,-0, BigInt on,"", null, undefined, NaN
// const userEmail=[]
// if(userEmail.length===0){
//     console.log("Array empty")
// }
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("obj empty")
}
// Nullish Coalescing Operator(??): null undefined
let val1;
// val1=5??9
// val1=null??10
// val1=undefined??10
val1=null??undefined
console.log(val1)

//terniary operator
//condittion?true:false
const iceprice=100
iceprice>=80?console.log("less than"):console.log("more than")