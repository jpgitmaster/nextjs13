import WebLayout from './layouts/WebLayout'
import CmsLayout from './layouts/CmsLayout'
import { Fragment } from 'react'
import { useSession } from 'next-auth/react'
const CustomSession = ({ children }: any) => {
    const session = useSession()
    const { status } = session
    return (
    <Fragment>
        {
            status === 'authenticated' &&
            <CmsLayout>
                {children}
            </CmsLayout>
        }
        {
            status === 'unauthenticated' &&
            <WebLayout>
                {children}
            </WebLayout>
        }
    </Fragment>
    )
}

export default CustomSession;
