'use client'
import { useState } from 'react'
import APIcalls from './../api';
const AddImagesController = () => {
    const {
        status,
        image,
        addImage
    } = APIcalls()
    const [image_, setImage]: any[] = useState([])
    const handleFileChange = (event: any) => {
        let imgFiles: any = []
        for (let i = 0; i < event.target.files.length; i++) {
            imgFiles.push({
                image: event.target.files[i],
                imageTarget: URL.createObjectURL(event.target.files[i]),
                name: ''
            })
        }
        setImage(imgFiles)
        // setImage({ files: [...image_.files, ...event.target.files] })
    }
    const handleSubmit = (e: any) => {
        console.log(image_)
        e.preventDefault()
    }
    return {
        // STATES
        image,
        image_,
        // HANDLES
        handleFileChange,
        handleSubmit,
    }
}

export default AddImagesController;