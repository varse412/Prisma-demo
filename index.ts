import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here
    // await prisma.user.create({
    //     data: {
    //         name: "sehgal"
    //     }
    // })
    // await prisma.user.deleteMany()
    // const allUsers = await prisma.user.findMany()

    // console.log("Hello allUsers", allUsers)
    await prisma.user.deleteMany()
    const user = await prisma.user.create({
        data: {
            name: "Varun sehgal",
            email: "abcd@gmail.com",
            age: 24,

        }
    })
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