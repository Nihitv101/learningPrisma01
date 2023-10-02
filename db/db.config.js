import {PrismaClient} from '@prisma/client'


// creating the instance of the class and using it for querying the database


const prisma = new PrismaClient({
    log: ['query'],
});





export default prisma;

