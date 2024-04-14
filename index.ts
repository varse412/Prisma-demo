import { PrismaClient } from '@prisma/client'
import { disconnect } from 'process'
import { connect } from 'tls'
const prisma = new PrismaClient({ log: ["query"] })

async function main() {
    // ... you will write your Prisma Client queries here
    const user = await prisma.user.create({
        data: {
            name: "sehgal",
            email: "abcd@gmail.com"
        }
    })
    // await prisma.user.deleteMany()
    // const allUsers = await prisma.user.findMany()

    // console.log("Hello allUsers", allUsers)
    // await prisma.user.deleteMany()
    // const user = await prisma.user.findUnique({
    //     where: {
    //         age: 12
    //     }
    // })
    console.log(user)
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })

// const user = await prisma.user.create({
//     data: {
//         name: "Varun sehgal",
//         email: "abcd@gmail.com",
//         age: 24,
//         userPreference: {
//             create: {
//                 emailUpdates: true
//             }
//         }
//     },
//     include: {
//         userPreference: true
//     }
// })
// select: {
//     name: true,
//     userPreference: {
//         select: { id: true }
//     }

// }

// prisma.user.createMany({
//     data: [{
//         name: "Vasssrun sehgal",
//         email: "assbcd@gmail.com",
//         age: 234,

//     }, {
//         name: "vsvsvsdv",
//         email: "vxf@gmail.com",
//         age: 2,
//     }],

// })

// findFirst
// fandMany
// findUnique

// distinct: ["name","age"] name &&age are distinct
// take:2 //no. of users 2 return
// skip :1 //skipping n. of users from start
// orderBy: {
//     age: "asc"/"desc"
// }
// where :{
//     name: {equals: "sally"}
// }
// where :{
//     name: {not: "sally"}
// }
// where :{
//     name: {notIn: ["sally","varun"]}
// }
// where :{
//     name: {In: ["sally","varun"]}
// }
// where :{
//     name: {notIn: ["sally","varun"]}
//     age: {lt: 13}
// }
//lt ==less than < and lte == <=
// where :{
//     email: {contains: "sally"}
// }
// where :{
//     email: {endsWith: "sally"}
// }
// where :{
//     email: {startsWith: "sally"}
// }

//do and operation using AND:[] and or operation using OR: [] ,NOT: {}
// where :{
// AND:[
//    { name: {notIn: ["sally","varun"]}},
//    {  age: {lt: 13}}
// ]
//
//
// }
//every some or none on one to many relations
// where: {
//     writtenPosts: {
//         every:{
//             title: "Tests"
//         }
//     }
// }

// one to many relation filter
// const user=await prisma.post.findMany({
//     where: {
//         author: {
//             is: {
//                 age: 32
//             }
//         }
//     }
// })
// update=>updates the first user it finds and allow select and include clause
// updateMany=>updates the many user it finds does'nt allow select,include clause
// prisma.user.update({
//     where:{
//         email: "sally ji "
//     }
// })
//update must be on unique field
//increment functionality,decrement,multiply ,divide
// data: {
//     age: {
//         increment: 1
//     }
// }

//connect the user data that already exists--connect keyword
// data: {
//     userPreference: {
//         connect: {
//             id: "fsffsfsfsfsfsfaafwbhehfrbhherrgeth",
//         }
//     }
// }
// or we can disconnet existing object
// disconnect: true
// where: {
//     email: "sdvsdvsdfsd"
// }
//connect any time of creation and disconnect any time of updation
