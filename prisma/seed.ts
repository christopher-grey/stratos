import { PrismaClient } from '@prisma/client';
import {useLocation} from 'react-router-dom';

const prisma = new PrismaClient()
async function main() {
    const location = useLocation();
    const newUser = await prisma.user.upsert({
        where: { email: location.state.email },
        update: {},
        create: {
            name: location.state.name,
            email: location.state.email,
            job_title: location.state.job_title,
            bio: '',
            city: location.state.cityState,
            school: location.state.school,
            layers: location.state.selectedOptions


        }
    })
    console.log({ newUser })
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

// export default async function seedDatabase(): Promise<void> {

// const createMany = await prisma.user.createMany({
//     data: [
//       { name: 'Bob', email: 'bob@prisma.io' },
//       { name: 'Bobo', email: 'bob@prisma.io' }, // Duplicate unique key!
//       { name: 'Yewande', email: 'yewande@prisma.io' },
//       { name: 'Angelique', email: 'angelique@prisma.io' },
//     ],
//     skipDuplicates: true, // Skip 'Bobo'
//   })



// }
// seedDatabase();