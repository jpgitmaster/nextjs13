'use client'
import { useState } from 'react'
import Validate from '@/utils/Validator'
import ListStates from './../../states'
import APIcalls from './../../api'
const AddLinkController = () => {
    const { link_, link_validations } = ListStates()
    const {status, setStatus, addLink} = APIcalls()
    const { loader, statusData } = status
    const [totalErr, setTotalErr] = useState(0)
    const [link, setLink] = useState<any>(link_)
    const [error, setError] = useState<any>(link_)

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
        setLink({ ...link, [name]: value })
        removeErr(name)
    }

    const handleNameChange = (event: any) => {
        const { name, value } = event.target
        setLink({
            ...link,
            [name]: value,
            slug: value.replace(/\s+/g, '-').toLowerCase()
        })
        removeErr(name)
        removeErr('slug')
    }

    // HANDLE SUBMIT
    const handleSubmit = (e: any) => {
        e.preventDefault()
        setStatus({...status, loader: true})
        const {
            validation_has_error,
            validation_errors
        } = Validate(link_validations, link)
        if (validation_has_error) {
            const timer = setTimeout(() => {
                setTotalErr(Object.keys(validation_errors).length)
                setError(validation_errors)
                setStatus({...status, loader: false})
                return false
            }, 500)
            return () => clearTimeout(timer)
        }
        addLink(link)
    }
    return {
        // STATES
        link,
        error,
        loader,
        statusData,

        // HANDLES
        handleNameChange,
        handleChange,
        handleSubmit,
    }
}

export default AddLinkController;