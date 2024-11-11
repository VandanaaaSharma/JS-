const arr=[0,1,2,3,4]
// console.log(arr[3])
 const arr1=new Array(1,2,3,4)
// console.log(arr1)
// //Array Method
// arr1.push(7)
// console.log(arr1)
// arr1.pop()// only remove the last value
// console.log(arr1)
// arr1.unshift(8)
// console.log(arr1)
// arr1.shift()// always remove the first index
// // console.log(arr1)
// const newarr = arr1.join()
// // console.log(newarr)
// console.log(typeof newarr)
//Slice and splice
// console.log("A", arr1)
// const n1=arr1.slice(1,3)
// console.log(n1)

// console.log("B", arr1)
// const n2=arr1.splice(1,3)
// console.log(n2)

// console.log("C", arr1)
// console.log(n2)


// *********************** Array Function ************************
const A = ["A", "B", "C"]
const B = ["E","F","G"]
//A.push(B) // Here B add in A as a 4 element
console.log(A)  // to add bothe elemnt in this use concat
const C = [...A, ...B] // This Method is called spread is also used for concat
console.log(C)