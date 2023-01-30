import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'
import APIcalls from '../api';
const GetCategoryController = () => {
                    /********** STATES **********/
    const { getCategory, category } = APIcalls();
    const pathname = usePathname()
    const categoryID: any = pathname?.split('/')[3]
    const { posts } = category;
    const [records, setRecords] = useState<any[]>(posts);

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
        if(categoryID){
            getCategory(categoryID);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryID]);
    
    useEffect(() => {
        setRecords(posts)
    }, [posts])

    return {
        // STATES
        category,
        categoryID,
        records, 

        // HANDLES
        handleCheckbox,
        handleCheckAll,
        handleToggleRemove
    }
}
export default GetCategoryController;