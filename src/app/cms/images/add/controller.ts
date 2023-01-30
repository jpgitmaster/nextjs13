'use client'
import { useState } from 'react'
import APIcalls from './../api';
const AddImagesController = () => {
    const {
        status,
        image,
        addImage
    } = APIcalls()
    
    const handleFileChange = (event: any) => {
        const targetFile = event.target.files[0]
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
    }
    return {
        // STATES
        image,

        // HANDLES
        handleFileChange,
        handleSubmit,
    }
}

export default AddImagesController;