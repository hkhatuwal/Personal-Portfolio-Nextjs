"use client"
import React, {useRef, useState} from 'react';
import Image from "next/image";
import {MdOutlineCancel} from "react-icons/md";
import {BsUpload} from "react-icons/bs";

const ImagePicker = ({image, onImageDelete}) => {
    const fileRef = useRef()


    const [pickedFile, setPickerFile] = useState();

    const onFilePick = (e) => {
        let url = URL.createObjectURL(e.target.files[0])
        console.log(url)
        setPickerFile(url)
    }

    return (
        <div>
            {image || pickedFile ? <div className={'relative  w-[150px]'}>
                <Image className={'mt-1'} src={pickedFile ? pickedFile : image} width={150} height={150} alt={"image"}/>
                <MdOutlineCancel onClick={() => {
                    setPickerFile(null)
                    onImageDelete()
                }} size={22} className={'text-red-500 absolute -top-2 -right-2 cursor-pointer'}/>
            </div> : <div>
                <BsUpload size={100} onClick={() => {
                    fileRef.current.click();
                }} className={'p-8 text-dark/60 border mt-1 cursor-pointer'}/>
                <input type="file" ref={fileRef} className={'hidden'} name="" id="" onChange={onFilePick}/>
            </div>}
        </div>
    );
};

export default ImagePicker;