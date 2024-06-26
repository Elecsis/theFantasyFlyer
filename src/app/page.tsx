import Image from 'next/image'
import Link from 'next/link'
import FeaturedHero from './componets/Featured'
import MainPost from './componets/MainPost'
import MainCategories from './componets/MainCategroies'
import MainPostBody from './componets/MainPostBody'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white text-black  xl:px-20">
        <FeaturedHero/>
        <MainPost/>
        <MainCategories/>
        <MainPostBody/>
    </main>
  )
}
