
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import APIcalls from './api'
const PageController = () => {
    const {
        content,
        hasContent,
        getPage,
    } = APIcalls();
    const pathName = usePathname()
    const activeLink: any = pathName?.split('/')

    // RESET FETCHING WHEN PAGE CHANGE
    useEffect(() => {
        if(activeLink[1] && !activeLink[2] && !hasContent){
            getPage(activeLink[1]);
        }
    }, [activeLink]);
    return {
        // STATES
        content,

        // HANDLES
    }
}
export default PageController;