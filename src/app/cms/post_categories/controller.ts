'use client'
import { useState, useEffect } from 'react'
import APIcalls from './api'
const GetCategoriesController = () => {
    const { categories, getCategories } = APIcalls()
    const { data } = categories;
    const [records, setRecords] = useState<any[]>(data)
    const [isUpdate, setUpdate] = useState(false)

    const handleToggleRemove = (role: any) => {
        const toggleRemove: any = records.map(record => record.id === role.id ? {...(record as object), isRemove: !role.isRemove}: record)
        setRecords(toggleRemove);
    }

    // HANDLE CHECK ALL
    const handleCheckAll = (event: any) => {
        const { checked } = event.target;
        setRecords(records.map(item => ({ ...item, isChecked: checked })));
    }

    // HANDLE CHECK EACH CHECKBOX
    const handleCheckbox = (event: any) => {
        const { name, checked } = event.target;
        setRecords(
            records.map((record) => record.id === name ?
                {...record, isChecked: checked}
                : record
            )
        );
    }

    useEffect(() => {
        getCategories();
        return () => {
            setUpdate(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isUpdate]);

    useEffect(() => {
        setRecords(data);
    }, [data]);
    
    return {
        // STATES
        records,

        // HANDLES
        handleCheckAll,
        handleCheckbox,
        handleToggleRemove
    }
}

export default GetCategoriesController;