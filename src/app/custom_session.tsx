import WebLayout from './layouts/WebLayout'
import CmsLayout from './layouts/CmsLayout'
import { useSession } from 'next-auth/react'
const CustomSession = ({ children }: any) => {
    const session = useSession()
    const { status } = session
    return (
    <>
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
    </>
    )
}

export default CustomSession;
