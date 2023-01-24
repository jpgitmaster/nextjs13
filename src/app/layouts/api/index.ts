import { useState } from 'react'
import Axios from 'axios'
import ListStates from '../states'
const APIcalls = () => {
    const { links_init } = ListStates();
    const [links, setLinks] = useState(links_init);

    // VIEW LINKS
    const getLinks = async () => {
        await Axios({
            method: 'GET',
            url: '/api/front/links/dropdownlinks',
        }).then((res) => {
            const data = res.data;
            setLinks({
                links_arr: data.results
            });
        })
    }

    return {
        links,
        getLinks,
    }
}
export default APIcalls;