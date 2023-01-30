import Image from 'next/image'
import Link from 'next/link'
import SubLinks from '../sublinks'
import styles from './../styles/Front.module.scss'
const Pages = () => {
  return (
    <SubLinks>
      <div className={styles.innerpage}>
        <h3 className={styles.formTitle}>List of Pages</h3>
        <Link href='/cms/front/pages/add' className={`${styles.button} ${styles.btnblue}`}>
          <Image src='/svgs/plus_icon.svg' className={styles.plus_icon}  alt='Add Icon' width={20} height={25} />
          <span>
            Add Page
          </span>
        </Link>
      </div>
    </SubLinks>
  )
}

export default Pages;
