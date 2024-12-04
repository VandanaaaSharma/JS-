const num=[1,2,3,4,5,6,7,8,9]
// const newnum = num.filter((num) => {
//     return num>4
// })
// const newnum =[]
// num.forEach((num)=>{
//     if(num>4){
//         newnum.push(num)
//     }
//  })
//  console.log(newnum)

//******************************** MAP */
// const newnum=num.map((num)=>{
//     return num+10
// })
// console.log(newnum)

//***************************** REDUCE */
const tot=num.reduce(function (accumulator, currentvalue){
    console.log(`accumulator:${accumulator} and currentvalue: ${currentvalue}`)
    return accumulator+currentvalue
}, 0)

