'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './styles/Front.module.scss'
const SubLinks = ({children}: any) => {
    const pathname = usePathname()
    const activeLink: any = pathname?.split('/')
    return(
        <>
            <div className={styles.sublinks}>
                <ul>
                <li className={
                    !activeLink[3] && activeLink[2] === 'front' ||
                    activeLink[2] === 'front' && activeLink[3] === 'update'
                    ? styles.linkActive : ''}>
                    <Link href='/cms/front'>
                    Front
                    </Link>
                </li>
                <li className={activeLink[3] === 'links' ? styles.linkActive : ''}>
                    <Link href='/cms/front/links'>
                    Links
                    </Link>
                </li>
                <li className={activeLink[3] === 'pages' ? styles.linkActive : ''}>
                    <Link href='/cms/front/pages'>
                    Pages
                    </Link>
                </li>
                </ul>
            </div>
            {children}
        </>
    )
}

export default SubLinks;