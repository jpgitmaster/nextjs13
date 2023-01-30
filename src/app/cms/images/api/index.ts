import { useState } from 'react'
import ListStates from '../states'
import Axios from 'axios'
const APIcalls = () => {
    const { status_, image_init } = ListStates();
    const [image, setImage] = useState(image_init);
    const [status, setStatus] = useState(status_);
    
    // ADD IMAGE
    const addImage = async (image: any) => {

    }

    return {
        status,
        image,
        addImage,
    }
}
export default APIcalls;