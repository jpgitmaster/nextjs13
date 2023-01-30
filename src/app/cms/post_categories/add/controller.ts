'use client'
import { useState } from 'react'
import Validate from '@/utils/Validator'
import APIcalls from './../api'
import ListStates from '../states'
const AddCategoryController = () => {
    const { category_validations } = ListStates()
    const { status, category, error, totalErr, setError, setTotalErr, setCategory, setStatus, addCategory } = APIcalls()
    const { loader, statusData } = status
    
    const configEditor = {
        buttonsSM: [
			'source', '|', 'bold', 'strikethrough', 'underline', 'italic', 'fontsize', 'brush', '|',
			'align',
		],
		height: 200,
        width: '100%',
        addNewLine: false,
        hidePoweredByJodit: true,
        readonly: false // all options from https://xdsoft.net/jodit/doc/
	}

    const handleChange = (event: any) => {
        const { name, value } = event.target
        if(name === 'name'){
            setCategory({ ...category, name: value, code: value.replace(/\s+/g, '_').toLowerCase() });
        }else if(name === 'code'){
            setCategory({ ...category, code: value.replace(/\s+/g, '_').toLowerCase() });
        }else{
            setCategory({ ...category, [name]: value });
        }
        if (error[name]) {
            delete error[name]
            setTotalErr(Object.keys(error).length)
        }
    }
    const handleContent = (content: any) => {
        setCategory({ ...category, description: content});
    }
    
    const handleSubmit = (e: any) => {
        e.preventDefault()
        setStatus({...status, loader: true})
        const {
            validation_has_error,
            validation_errors
        } = Validate(category_validations, category)
        if (validation_has_error) {
            const timer = setTimeout(() => {
                setTotalErr(Object.keys(validation_errors).length)
                setError(validation_errors)
                setStatus({...status, loader: false})
                return false
            }, 500)
            return () => clearTimeout(timer)
        }
        addCategory(category)
    }
    return {
        // STATES
        category,
        error,
        loader,
        statusData,
        configEditor,
        totalErr,

        // HANDLES
        handleChange,
        handleContent,
        handleSubmit,
    }
}

export default AddCategoryController;