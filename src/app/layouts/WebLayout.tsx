
import Image from 'next/image'
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
      <div className={styles.header}>
        <div className={styles.imgContainer}>
          <Image src='/images/logo3.png' priority alt='CoderStudio Logo' className={styles.imgLogo} width={375} height={0} />
        </div>
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
        <button className={`${styles.button} ${styles.btngreen}`}>Connect with us</button>
      </div>
      {children}
      <div className={styles.footer}>
        <div className={styles.imgContainer}>
          <Image src='/images/logo3.png' priority alt='CoderStudio Logo' className={styles.imgLogo} width={300} height={0} />
        </div>
        <div className={styles.footer_links}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href={'/'}>
                Link 1
              </Link>
            </li>
            <li>
              <Link href={'/'}>
                Link 2
              </Link>
            </li>
            <li>
              <Link href={'/'}>
                Link 3
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer_links}>
          <h3>Company</h3>
          <ul>
            <li>
              <Link href={'/'}>
                Link 1
              </Link>
            </li>
            <li>
              <Link href={'/'}>
                Link 2
              </Link>
            </li>
            <li>
              <Link href={'/'}>
                Link 3
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer_links}>
          <h3>Others</h3>
          <ul>
            <li>
              <Link href={'/'}>
                Link 1
              </Link>
            </li>
            <li>
              <Link href={'/'}>
                Link 2
              </Link>
            </li>
            <li>
              <Link href={'/'}>
                Link 3
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBtm}>
        © 2023 www.coderstudio.com All rights reserved.
      </div>
    </>
  )
}

export default WebLayout
