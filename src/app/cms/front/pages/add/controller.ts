'use client'
import { useState } from 'react'
import Validate from '@/utils/Validator'
import ListStates from './../../states'
import APIcalls from './../../api'
const AddPageController = () => {
    const { page_, page_validations } = ListStates()
    const {status, setStatus, addPage} = APIcalls()
    const { loader, statusData } = status
    const [totalErr, setTotalErr] = useState(0)
    const [page, setPage] = useState<any>(page_)
    const [error, setError] = useState<any>(page_)

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
        setPage({ ...page, [name]: value })
        removeErr(name)
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

        // HANDLES
        handleChange,
        handleSubmit,
    }
}

export default AddPageController;