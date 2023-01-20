import { usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import Breadcrumbs from '@/utils/BreadcrumbsLinks';
import Link from 'next/link'
import Image from 'next/image'
import styles from './styles/CmsLayout.module.scss'

const CmsLayout = ({children}: any) => {
  const session = useSession()
  const { name, image } : any = session?.data?.user
  const src = `${image}`;
  // console.log( session )
  const pathname = usePathname()
  const handleLogout = async () => {
    return await signOut({redirect: true, callbackUrl: '/'})
  }
  return (
    <div className={styles.app}>
      <div className={styles.links}>
        <ul>
          <li className={pathname === '/cms/dashboard' ? styles.linkActive : ''}>
            <Link href='/cms/dashboard'>
              Dashboard
            </Link>
          </li>
          <li className={pathname === '/cms/front' ? styles.linkActive : ''}>
            <Link href='/cms/front'>
              Front
            </Link>
          </li>
          <li className={pathname === '/cms/posts' ? styles.linkActive : ''}>
            <Link href='/cms/posts'>
              Posts
            </Link>
          </li>
          <li className={pathname === '/cms/images' ? styles.linkActive : ''}>
            <Link href='/cms/images'>
              Images
            </Link>
          </li>
          <li className={pathname === '/cms/users' ? styles.linkActive : ''}>
            <Link href='/cms/users'>
              Users
            </Link>
          </li>
          <li className={pathname === '/cms/roles' ? styles.linkActive : ''}>
            <Link href='/cms/roles'>
              Roles
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <Breadcrumbs />
          </div>
          <div className={styles.headerRight}>
            <div className={styles.userInfo}>
              <strong>{name}</strong>
              <div className={styles.logout}>
                <button type='button' onClick={handleLogout}>LOGOUT</button>
              </div>
            </div>
            <div className={styles.avapic}>
              <Image loader={() => src} src={src} alt={name} width={100} height={100} />
            </div>
          </div>
        </div>
        <div className={styles.page}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default CmsLayout
