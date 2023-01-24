import { useState, useEffect, useCallback } from 'react';
import APIcalls from '../api';
const MasterController = () => {
                    /********** STATES **********/
    const {
        links,
        getLinks
    } = APIcalls();
    const { links_arr } = links
    const [isUpdate, setUpdate] = useState(false)
   
    useEffect(() => {
        getLinks();
        return () => {
            setUpdate(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isUpdate]);
    return {
        // STATES
        links_arr,

        // HANDLES
    }
}
export default MasterController;