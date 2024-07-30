"use client"

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React, { useEffect, useMemo, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { app } from "@/utils/firebase";
import ImageIconOne from "../../../../public/svgs/image1";
import ImageIconTwo from "../../../../public/svgs/image2";
import VideoIcon from "../../../../public/svgs/video";


const storage = getStorage(app);

export default function Write() {

    const { status } = useSession();
    const router = useRouter();
    const [file, setFile] = useState<File | null>(null);
    const [media, setMedia] = useState('');
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [catSlug, setCatSlug] = useState('Category');
    const [isOpen, setIsOpen] = useState(false);
    const list = [
        {
            "category": "News"
        },
        {
            "category": "Blog"
        },
        {
            "category": "Match-Ups"
        },
        {
            "category": "Start/Sit"
        },
        {
            "category": "The Waiver Wire"
        },
        {
            "category": "Draft Stratigies"
        },
        {
            "category": "Team Analysis"
        },
        {
            "category": "Player Rankings"
        }
    ]
    
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);

    useEffect(() => {
        const upload = () => {
            if (!file) return;
            const name = new Date().getTime + file.name;
            const storageRef = ref(storage, name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed', 
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                }, 
                (error) => {
                    console.error("Upload error:", error);
                }, 
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        setMedia(downloadURL);
                    });
                }
            );
        };
       file && upload();
    }, [file]);

    if(status === "loading"){
        return <div className="w-screen h-screen">Loading .....</div>
    }    

    if(status === "unauthenticated"){
        router.push('/login')
    }  



    const slugify = (str : string) => str.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"");

    const handleSubmit = async () => {
        console.log('started')
        const res = await fetch(
            "https://www.thefantasyflyer.com/api/posts",{
                method: "POST",
                body: JSON.stringify({
                    title: title ,
                    desc: value,
                    img: media,
                    slug: slugify(title),
                    catSlug: catSlug,
                }
            
            ),
            }
            
        )
        console.log(res);
        setTitle('');
        setValue('');
        setMedia('');
        setCatSlug('Category');
    }

    return (
        <main className="flex flex-col w-full bg-lime-500 text-black  p-10 h-auto">
            <input className="px-5 text-5xl rounded-lg" type="text" placeholder="Title" onChange={ e => setTitle(e.target.value)}/>
            <div className="flex flex-row   text-white  w-full justify-between self-center pr-[29%] pt-5">
                <input
                    type="file"
                    id="image"
                    onChange={(e) => {
                        if (e.target.files && e.target.files.length > 0) {
                            setFile(e.target.files[0]);
                        }
                    }}
                    className="invisible w-0" 
                />
                <label htmlFor="image">
                    <ImageIconOne />
                </label>
                <ImageIconTwo />
                <VideoIcon />
            </div>  
            <div className="bg-white h-full " placeholder="Write the post.........">
                <ReactQuill
                    placeholder={"Write Post ............"}
                    value={value}
                    onChange={setValue}
                />
            </div>
            <div className="relative flex flex-col self-center  w-[220px] h-[220px] py-5">
                <button onClick={()=> setIsOpen((s) =>!s)} className="w-full text-white tracking-wide flex flex-row  rounded-lg border-2 justify-between px-4 py-1">
                    {catSlug}
                    {!isOpen ?(
                        <div className="text-white">{'+'}</div>
                    ) : (
                        <div>{'-'}</div>
                    )}
                </button>
                {!isOpen && (
                    <div className=" absolute top-[55px] right-[12px] bg-white border border-lime-200 rounded-lg">
                        {list.map((item, i) =>(
                            <div className="w-[200px] h-auto hover:bg-lime-500 hover:text-white " key={i} onClick={ () => {setCatSlug(item.category ), setIsOpen((s) =>!s)} }>
                                <h2 className="flex justify-center">{item.category}</h2>
                            </div>
                        ))}
                    </div>
                )}
            </div>
                
            
            <div className="flex pt-10 w-full justify-center">
                <button onClick={handleSubmit}  className="bg-white text-black hover:bg-lime-600 self-center py-2 px-4 rounded h-12 w-[33%] border-solid border-white">
                    Publish
                </button>
            </div>
        </main>
    );
}









