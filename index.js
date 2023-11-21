let promise_1= new Promise((resolve,reject)=>{
if(10>5)
    setTimeout(()=>{
    resolve(10)
},3000)
else
    reject("10 is not greater")
})

let promise_2= new Promise((resolve,reject)=>{
        let date=new Date("01-01-2020")
        let year=date.getFullYear()
    if((year%100===0 && year%400===0)||(year%100!=0 && year%4===0))
    resolve("this is a leap year")
    else
    reject("this is not a leap year")
})

let promise_3=new Promise((resolve,reject)=>{
    resolve("promise 3 is printed")
})
let promise_4=new Promise((resolve,reject)=>{
    resolve("promise 4 is printed")
})
let promise_5=new Promise((resolve,reject)=>{
    resolve("promise 5 is printed")
})


// promise_1.then(value=>value*10)
//          .then(value =>{
//             console.log("10 times of the value is:",value)
//          return "the operation is success"
// })
//         .then(value=>console.log(value))
//          .catch(error=>alert(error))   

// promise_2.then(value=>console.log(value))
//          .catch(error=>console.log(error))

// promise_3.then(value=>console.log(value))
//          .catch(error=>console.error(error))
// promise_4.then(value=>console.log(value))
//          .catch(error=>console.error(error))
// promise_5.then(value=>console.log(value))
//          .catch(error=>console.error(error))

// Promise.all([promise_1,promise_2,promise_3,promise_4,promise_5])
// .then(values=>console.log(values))
// .catch(errors=>console.error(errors))

promise_1
.then(values=>{console.log(values)
    promise_2
    .then(values=>{console.log(values)
        promise_3
        .then(values=>{console.log(values)
            promise_4
            .then(values=>{console.log(values)
              promise_5
                .then(values=>{console.log(values)
             })
            .catch(errors=>console.error(errors))
        })
        .catch(errors=>console.error(errors))
        })
        .catch(errors=>console.error(errors))
    })
    .catch(errors=>console.error(errors))
})
 .catch(errors=>console.error(errors))
