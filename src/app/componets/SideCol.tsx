import EditorsPosts from "./EditorsPosts";
import PopularPosts from "./PopularPost";
import SideCategories from "./SideCategories";

export function SideCol() {
return(
        <div className='pt-10 md:pt-0 md:w-full lg:w-1/5 flex flex-col md:flex-row lg:flex-col md:px-10 lg:px-0 md:gap-4'>
            <PopularPosts/>
            <div className='w-full'>
                <SideCategories/>
                <EditorsPosts/>
            </div>
        </div>
    )
}