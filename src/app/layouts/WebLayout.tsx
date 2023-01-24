
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MasterController from './controllers/MasterController'
import styles from './styles/WebLayout.module.scss'
const WebLayout = ({children}: any) => {
  const pathname = usePathname()
  const activeLink: any = pathname?.split('/')
  const {
    // STATES
    links_arr
  } = MasterController();
  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          <li className={styles.hasChildren + (!activeLink[1] ? ' '+styles.linkActive : '')}>
            <div className={styles.dropdown}>
              <Link href={'/'} className={styles.dropbtn}>
                Home
              </Link>
            </div>
          </li>
          {
            links_arr ?
            links_arr.map((nav: any) => 
              nav.sublinks.length ?
              <li key={nav.id} className={styles.hasChildren + (activeLink[1] === nav.slug ? ' '+styles.linkActive : '')}>
                <div className={styles.dropdown}>
                  <Link href={'/'+nav.slug} className={styles.dropbtn}>
                    {nav.name}
                  </Link>
                  <ul className={styles.dropdownContent}>
                  {
                    nav.sublinks.map((sublink: any) =>
                      <li key={sublink.id}>
                        <Link href={'/'+nav.slug+'/'+sublink.slug}>
                          {sublink.name}
                        </Link>
                      </li>
                    )
                  }
                  </ul>
                </div>
              </li>
              :
              <li key={nav.id} className={(activeLink[1] === nav.slug ? ' '+styles.linkActive : '')}>
                <Link href={'/'+nav.slug} className={styles.link}>
                  {nav.name}
                </Link>
              </li>
            )
            : ''
          }
        </ul>
      </nav>
      {children}
    </>
  )
}

export default WebLayout
