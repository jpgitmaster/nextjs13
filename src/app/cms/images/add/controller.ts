'use client'
import { useState, useEffect } from 'react'
import APIcalls from './../api';
const AddImagesController = () => {
    const {
        status,
        addImage
    } = APIcalls()
    const [image_, setImage]: any[] = useState([])
    const [checkbx, setCheckbx] = useState(false)
    const handleFileChange = (event: any) => {
        let imgFiles: any = []
        for (let i = 0; i < event.target.files.length; i++) {
            imgFiles.push({
                image: event.target.files[i],
                imageTarget: URL.createObjectURL(event.target.files[i]),
                name: '',
                keycode: ''
            })
        }
        setImage(imgFiles)
        // setImage({ files: [...image_.files, ...event.target.files] })
    }

    // HANDLE CHECK EACH CHECKBOX
    const handleCheckbox = () => {
        setCheckbx(!checkbx)
    }

    const handleChange = (event: any, index: any) => {
        const { name, value } = event.target
        let newImages = []
        if(checkbx){
            newImages = image_.map((img: any, indx: any) => indx === index ? {
                ...img,
                [name]: value,
                keycode: value.replace(/\s+/g, '_').toLowerCase()
            } : {
                ...img,
                name: value+' '+indx,
                keycode: value.replace(/\s+/g, '_').toLowerCase()+'_'+indx,
            })
        }else{
            newImages = image_.map((img: any, indx: any) => indx === index ? {
                ...img,
                [name]: value,
                keycode: value.replace(/\s+/g, '_').toLowerCase()
            } : img)
        }
        
        // console.log(newImages)
        setImage(newImages)
     }

    const handleSubmit = (e: any) => {
        console.log(image_)
        e.preventDefault()
    }

    // useEffect(() => {
    //     console.log(image_)
    // }, [image_])

    return {
        // STATES
        image_,
        checkbx,
        // HANDLES
        handleCheckbox,
        handleFileChange,
        handleChange,
        handleSubmit,
    }
}

export default AddImagesController;