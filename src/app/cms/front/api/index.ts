import { useState } from 'react'
import Axios from 'axios'
import ListStates from '../states'

const APIcalls = () => {
    const { status_ } = ListStates();
    const [status, setStatus] = useState(status_)
    

    // ADD LINK
    const addLink = async (link: any) => {
        const timer = setTimeout(() => {
            setStatus({
                loader: false,
                statusData: {
                    message: 'Successfully Added!',
                    submessage: link.name + ' Lorem Ipsum Dolor'
                }
            });
        }, 500);
        return () => clearTimeout(timer);
    }

    // ADD PAGE
    const addPage = async (page: any) => {
        const timer = setTimeout(() => {
            setStatus({
                loader: false,
                statusData: {
                    message: 'Successfully Added!',
                    submessage: page.title + ' Lorem Ipsum Dolor'
                }
            });
        }, 500);
        return () => clearTimeout(timer);
    }

    return {
        status,
        setStatus,
        addLink,
        addPage,
    }
}
export default APIcalls;