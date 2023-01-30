import { useState } from 'react'
import ListStates from '../states'
import Axios from 'axios'
const APIcalls = () => {
    const { status_, categories_init, category_init } = ListStates();
    const [status, setStatus] = useState(status_);
    const [category, setCategory] = useState<any>(category_init)
    const [categories, setCategories] = useState<any>(categories_init);
    const [error, setError] = useState<any>(category_init)
    const [totalErr, setTotalErr] = useState(0)

    // VIEW CATEGORIES
    const getCategories = async () => {
        await Axios({
            method: 'GET',
            url: '/api/posts/categories',
        }).then((res) => {
            const data = res.data;
            console.log(data);
            setCategories({
                data: data.results
            });
        }).catch((error) => {
            console.log(error)
        })
    }

    // VIEW CATEGORY
    const getCategory = async (id: any) => {
        await
        Axios({
            method: 'GET',
            url: '/api/posts/categories/' + id,
        }).then((res) => {
            const results = res.data;
            if(results){
                setCategory(results.category);
            }
        }).catch((error) => {
            console.log(error.response)
        })
    }

    // ADD CATEGORY
    const addCategory = async (category: any) => {
        await Axios({
            method: 'POST',
            url: '/api/posts/categories',
            data: category
        }).then((success) => {
            // console.log('result')
            // console.log(success)
            const timer = setTimeout(() => {
                setStatus({
                    loader: false,
                    statusData: {
                        message: 'Successfully Added!',
                        submessage: category.name + ' Lorem Ipsum Dolor'
                    }
                });
            }, 500);
            return () => clearTimeout(timer);
        }).catch((err) => {
            const { code } = err.response.data;
            const timer = setTimeout(() => {
                if(code){
                    setError({...error, name: '', code: code});
                    setTotalErr(1);
                }
                setStatus({...status, loader: false});
                return false
            }, 500)
            return () => clearTimeout(timer);
        })
    }

    // ADD POST
    const addPost = async (post: any) => {
        await Axios({
            method: 'POST',
            url: '/api/posts',
            data: post
        }).then((success) => {
            // console.log('result')
            // console.log(success)
            const timer = setTimeout(() => {
                setStatus({
                    loader: false,
                    statusData: {
                        message: 'Successfully Added!',
                        submessage: category.name + ' Lorem Ipsum Dolor'
                    }
                });
            }, 500);
            return () => clearTimeout(timer);
        }).catch((err) => {
            const { code } = err.response.data;
            const timer = setTimeout(() => {
                if(code){
                    setError({...error, name: '', code: code});
                    setTotalErr(1);
                }
                setStatus({...status, loader: false});
                return false
            }, 500)
            return () => clearTimeout(timer);
        })
    }

    return {
        status,
        categories,
        category,
        totalErr,
        error,
        setError,
        setTotalErr,
        setStatus,
        setCategory,
        addCategory,
        getCategories,
        getCategory,
        addPost,
    }
}
export default APIcalls;