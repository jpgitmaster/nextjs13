import { useState } from 'react'
import Axios from 'axios'
import ListStates from '../states'

const APIcalls = () => {
    const { status_, links_init } = ListStates();
    const [status, setStatus] = useState(status_)
    const [links, setLinks] = useState(links_init)
    
    // VIEW LINKS
    const getLinks = async () => {
        await Axios({
            method: 'GET',
            url: '/api/front/links',
        }).then((res) => {
            const data = res.data;
            setLinks({
                links_arr: data.results,
                links_total: data.total
            });
        })
    }

    const getDropwdownLinks = async () => {
        await Axios({
            method: 'GET',
            url: '/api/front/links/dropdownlinks',
        }).then((res) => {
            const data = res.data;
            setLinks({
                links_arr: data.results,
                links_total: data.total
            });
        })
    }

    // ADD LINK
    const addLink = async (link: any) => {
        await Axios({
            method: 'POST',
            url: '/api/front/links',
            data: link
        }).then((success) => {
            console.log('result')
            console.log(success)
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
        }).catch((error) => {
            console.log(error.response)
        })
    }

    // ADD PAGE
    const addPage = async (page: any) => {
        await Axios({
            method: 'POST',
            url: '/api/front/pages',
            data: page
        }).then((success) => {
            console.log('result')
            console.log(success)
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
        }).catch((error) => {
            console.log(error.response)
        })
    }

    return {
        links,
        status,
        setStatus,
        getLinks,
        getDropwdownLinks,
        addLink,
        addPage,
    }
}
export default APIcalls;