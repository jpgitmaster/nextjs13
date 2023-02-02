'use client'
import { useState } from 'react'
import Validate from '@/utils/Validator'
import ListStates from './../../states'
import APIcalls from './../../api'
const AddPageController = () => {
    const { page_init, page_validations } = ListStates()
    const {status, setStatus, addPage} = APIcalls()
    const { loader, statusData } = status
    const [totalErr, setTotalErr] = useState(0)
    const [preview, setPreview] = useState(false)
    const [page, setPage] = useState<any>(page_init)
    const [error, setError] = useState<any>(page_init)
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
    const handlePreview = () => {
        setPreview(preview => !preview)
    }

    // HANDLE INPUT CHANGES
    const handleChange = (event: any) => {
        const { name, value } = event.target
        setPage({ ...page, [name]: value })
        removeErr(name)
    }

    const handleLinkID = (value: any) => {
        setPage({ ...page, linkId: value.id });
        removeErr('linkId')
    }

    const handleContent = (content: any) => {
        setPage({ ...page, content: content});
    }

    // HANDLE SUBMIT
    const handleSubmit = (e: any) => {
        e.preventDefault()
        setStatus({...status, loader: true})
        const {
            validation_has_error,
            validation_errors
        } = Validate(page_validations, page)
        if (validation_has_error) {
            const timer = setTimeout(() => {
                setTotalErr(Object.keys(validation_errors).length)
                setError(validation_errors)
                setStatus({...status, loader: false})
                return false
            }, 500)
            return () => clearTimeout(timer)
        }
        addPage(page)
    }
    return {
        // STATES
        page,
        error,
        loader,
        statusData,
        configEditor,
        preview,

        // HANDLES
        handlePreview,
        handleChange,
        handleLinkID,
        handleContent,
        handleSubmit,
    }
}

export default AddPageController;