"use client"

import ImageIconOne from "../../../public/svgs/image1";
import ImageIconTwo from "../../../public/svgs/image2";
import VideoIcon from "../../../public/svgs/video";
import ReactQuill from 'react-quill'
import React, { useMemo, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from "next/dynamic";


export default function Write() {
    const [value, setValue] = useState('');
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[]);
    

    return (
        <main className="flex w-full h-auto bg-lime-500   text-black flex-col p-10">
            <input className="px-5 text-5xl rounded-lg" type="text" placeholder="Title" />
            <div className="flex flex-row p-5 gap-5 text-white">
                <ImageIconOne/>
                <ImageIconTwo/>
                <VideoIcon/>
            </div>
            <div className="bg-white h-full rounded-lg text-xl"  placeholder="Write the post.........">
                <ReactQuill
                    placeholder={"Write Post ............"}
                    value={value}
                    onChange={setValue}
                />
            </div>
            <div className="flex pt-10 w-full justify-center">
                <button className="bg-white text-black hover:bg-lime-600  self-center  py-2 px-4 rounded w-[33%]">Publish</button>
            </div>
            
        </main>
    )
}