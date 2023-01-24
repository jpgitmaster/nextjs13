import { useState } from 'react'
import ListStates from '../states'
import Axios from 'axios'
const APIcalls = () => {
    const { page_init } = ListStates()
    const [content, setContent] = useState(page_init)
    const [hasContent, setHasContent] = useState(false)
    // VIEW PAGE CONTENT
    const getPage = async (pageId: any) => {
        if(pageId){
            await Axios({
                method: 'GET',
                url: '/api/public/page/'+pageId,
            }).then((res) => {
                const data = res.data;
                setContent(data.results)
                setHasContent(true)
                // console.log(data)
            })
        }
    }
    return {
        content,
        hasContent,
        setHasContent,
        getPage,
    }
}
export default APIcalls;