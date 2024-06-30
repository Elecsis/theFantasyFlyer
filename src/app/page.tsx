
import FeaturedHero from './componets/MainFeaturedHero'
import MainPost from './componets/MainPost'
import MainCategories from './componets/MainCategroies'
import MainPostBody from './componets/MainPostBody'

export default function Home({searchParams}: {searchParams: any}) {

  const page = parseInt(searchParams.page) || 1
  

  return (
    <main className="flex min-h-screen flex-col items-center bg-white text-black  xl:px-20">
        <FeaturedHero/>
        <MainPost/>
        <MainCategories/>
        <MainPostBody page={page}/>
    </main>
  )
}
