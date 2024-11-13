if(true){
    let a=1
    const b=2
    var c=3
}
// console.log(a) // gives error bec let define locally
// console.log(b) gives error bec let define locally
// console.log(c)
function one(){
    const username="vandana"
    function two(){  // ye one ko access kr skta hai
        const website="insta"
        console.log(username)
    }
    //console.log(website) ye error show krega kuki website jo func. two mein hai and ye function two ke bahar print kra rahe hai
    // two()

}
one()

//************************Important */
console.log(addone(5))
function addone(num){
    return num+1
}
// console.log(addone(5))
// console.log(two(5)) gives error
const two=function(num){
    return num+2
}
console.log(two(5))