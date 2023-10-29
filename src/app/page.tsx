import Image from 'next/image'
import styles from './page.module.css'
import prisma from '../../lib/prisma'


export default async function Home() {

  const user = await prisma.user.create({
      data: {
        email: 'sachikosama@gmail.com',
        username: 'sachiko_sama',
      }
  })


  return (
    <>
    </>
  )
}
