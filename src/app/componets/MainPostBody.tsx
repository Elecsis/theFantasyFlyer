import SideCategories from './SideCategories'
import CardList from './CardList'
import EditorsPosts from './EditorsPosts'
import PopularPosts from './PopularPost'

export default function MainPostBody(page: any, cat: any) {
    
    

    return (
        <div className='flex flex-col w-full lg:flex-row px-5 sm:px-10'>
            <div className='lg:w-4/5 flex flex-col'>
                <div id='posts' className='w-full text-center md:text-left'>
                    <h1 className='font-semibold text-2xl py-6 md:pt-14  md:pb-10 md:text-left'>Recent posts</h1>
                </div> 
                <CardList page={page.page} cat={page.cat} />
            </div>
            <div className='pt-10 md:pt-0 md:w-full lg:w-1/5 flex flex-col md:flex-row lg:flex-col md:px-10 lg:px-0 md:gap-4'>
                <PopularPosts/>
                <div className='w-full'>
                    <SideCategories/>
                    <EditorsPosts/>
                </div>
            </div>
        </div>
    ) 
}












