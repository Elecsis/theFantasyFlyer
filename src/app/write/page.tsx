"use client"

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import ImageIconOne from "../../../public/svgs/image1";
import ImageIconTwo from "../../../public/svgs/image2";
import VideoIcon from "../../../public/svgs/video";
import React, { useEffect, useMemo, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { app } from "@/utils/firebase";

const storage = getStorage(app);

export default function Write() {

    const { status } = useSession();
    const router = useRouter();
    const [file, setFile] = useState<File | null>(null);
    const [media, setMedia] = useState('');
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);

    useEffect(() => {
        const upload = () => {
            if (!file) return;
            const name = new Date().getTime + file.name as unknown as File;
            const storageRef = ref(storage, 'images/rivers.jpg');
            const uploadTask = uploadBytesResumable(storageRef, name);

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
        if (file) {
            upload();
        }
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
                    title ,
                    desc: value,
                    img: media,
                    slug: slugify(title),
                    cat: "News",
                }
            
            ),
            }
        )
        console.log(res)
    }

    return (
        <main className="flex w-full bg-lime-500 text-black flex-col p-10 h-screen">
            <input className="px-5 text-5xl rounded-lg" type="text" placeholder="Title" onChange={ e => setTitle(e.target.value)}/>
            <div className="flex flex-row p-5 gap-5 text-white">
                <input
                    type="file"
                    id="image"
                    onChange={(e) => {
                        if (e.target.files && e.target.files.length > 0) {
                            setFile(e.target.files[0]);
                        }
                    }}
                    className="invisible"
                />
                <label htmlFor="image">
                    <ImageIconOne />
                </label>
                <ImageIconTwo />
                <VideoIcon />
            </div>
            <div className="bg-white h-full" placeholder="Write the post.........">
                <ReactQuill
                    placeholder={"Write Post ............"}
                    value={value}
                    onChange={setValue}
                />
            </div>
            <div className="flex pt-10 w-full justify-center">
                <button onClick={handleSubmit}  className="bg-white text-black hover:bg-lime-600 self-center py-2 px-4 rounded w-[33%]">Publish</button>
            </div>
        </main>
    );
}









