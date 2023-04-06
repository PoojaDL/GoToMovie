console.log("Person 1: shows ticket");
console.log("Person 2: shows ticket");

// Async/await method

const preMovie=async()=>{
  const tickets=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('ticket')
    },3000)
})
    const getpopcorn=new Promise((resolve,reject)=>resolve(`popcorn`))
    const addbutter=new Promise((resolve,reject)=>resolve(`butter`))
    const getcoolDrinks=new Promise((resolve,reject)=>resolve(`coolDrinks`))

  let ticketsGive=await tickets;

  console.log("Sis brought tickets");
  console.log("Me: lets go");
  console.log("Sis: I hungry, Go get popcorn")

  let popcorn= await getpopcorn;

  console.log(`Me: Got you ${popcorn}, let's go`);
  console.log("Sis: I need butter on it")

  let butter=await addbutter;

  console.log(`Me: Here ${butter} popcorn, Want anything else?`);
  console.log("Sis: Yeah, Cooldrinks")

  let coolDrinks=await getcoolDrinks;

  console.log(`Me:Bought ${coolDrinks} Want anything else?`);
  console.log("Sis: It's getting show time, Let's goo...!")

  return ticketsGive;
}

preMovie().then((t)=>console.log(`Me : shows ${t}`))

// Promises method

// const getTicket= new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('ticket')
//   },1000)
// })

// const getpopcorn=getTicket.then((t)=>{
//   console.log("Me shows ticket");
//   console.log("Me: lets go");
//   console.log("Sis: I hungry, Go get popcorn")
//   return new Promise((resolve,reject)=>{resolve(`${t} popcorn`)})
// })
//
//
// const getButter=getpopcorn.then((t)=>{
//   console.log("Me: Got you popcorn, let's go");
//   console.log("Sis: I need butter on it")
//   return new Promise((resolve,reject)=>{resolve(`${t} butter`)})
// })
//
//
// const getCoolDrink=getButter.then((t)=>{
//   console.log("Me: Here Butter popcorn, Want anything else?");
//   console.log("Sis: Yeah, Cooldrinks")
//   return new Promise((resolve,reject)=>{resolve(`${t} Cooldrinks`)})
// })
//
// getCoolDrink.then((t)=>console.log(t))
//

console.log("Person 4: shows ticket");
console.log("Person 5: shows ticket");
