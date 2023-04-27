import Image from 'next/image'
import { Inter } from 'next/font/google'
 import landingstyles from './styles/landing.module.scss'
import { RouterProvider } from 'react-router-dom'
import AppRoutes from './routes'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <AppRoutes/>
    )
}
