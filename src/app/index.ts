import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
}

/**
 * It is not necessary to call $connect() thanks to the lazy connect behavior: 
 * The PrismaClient instance connects lazily when the first request is made 
 * to the API ($connect() is called for you under the hood).
 * 
 * Unless you want the first request to respond instantly
 * 
 * https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/connection-management#connect
 */
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
