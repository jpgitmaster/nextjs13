'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Validate from '@/utils/Validator'
import ListStates from './../../states'
import APIcalls from './../../api'
const AddPostController = () => {
    const { post_init, post_validations } = ListStates()
    const {status, setStatus, addPost} = APIcalls()
    const { loader, statusData } = status
    const pathname = usePathname()
    const categoryID: any = pathname?.split('/')[3]
    const [totalErr, setTotalErr] = useState(0)
    const [post, setPost] = useState<any>(post_init)
    const [error, setError] = useState<any>(post_init)
    const configEditor = {
        buttons: ['source', '|', 'bold', 'strikethrough', 'underline', 'italic', '|', 'superscript', 'subscript', '|', 'ul', 'ol', '|', 'outdent', 'indent', '|', 'font', 'fontsize', 'brush', 'paragraph', '|', 'image', 'video', 'table', 'link', '|', 'align'],
        buttonsXS: ['source', '|', 'bold', 'strikethrough', 'underline', 'italic', '|', 'ul', 'ol', '|', 'font', 'fontsize', 'brush', '|', 'image', 'video', 'table', 'link', '|', 'align'],
        height: 500,
        addNewLine: false,
        hidePoweredByJodit: true,
        readonly: false, // all options from https://xdsoft.net/jodit/doc/
    }

    // REMOVING CLIENT VALIDATION PER INPUT
    const removeErr = (name: string) => {
        if (error[name]) {
            delete error[name]
            setTotalErr(Object.keys(error).length)
        }
    }

    // HANDLE INPUT CHANGES
    const handleChange = (event: any) => {
        const { name, value } = event.target
        setPost({ ...post, [name]: value, categoryId: categoryID })
        removeErr(name)
    }

    const handleContent = (content: any) => {
        setPost({ ...post, content: content, categoryId: categoryID});
    }

    // HANDLE SUBMIT
    const handleSubmit = (e: any) => {
        e.preventDefault()
        setStatus({...status, loader: true})
        const {
            validation_has_error,
            validation_errors
        } = Validate(post_validations, post)
        if (validation_has_error) {
            const timer = setTimeout(() => {
                setTotalErr(Object.keys(validation_errors).length)
                setError(validation_errors)
                setStatus({...status, loader: false})
                return false
            }, 500)
            return () => clearTimeout(timer)
        }
        addPost(post)
    }
    return {
        // STATES
        post,
        categoryID,
        error,
        loader,
        statusData,
        configEditor,

        // HANDLES
        handleChange,
        handleContent,
        handleSubmit,
    }
}

export default AddPostController;