import Image from 'next/image'
import Link from 'next/link'
import SubLinks from './../sublinks'
import styles from './../styles/Front.module.scss'
const Links = () => {
  return (
    <SubLinks>
      <div className={styles.innerpage}>
        <h3 className={styles.formTitle}>List of Links</h3>
        <Link href='/cms/front/links/add' className={`${styles.button} ${styles.btnblue}`}>
          <Image src='/svgs/plus_icon.svg' className={styles.plus_icon}  alt='Add Icon' width={20} height={25} />
          <span>
            Add Link
          </span>
        </Link>
      </div>
    </SubLinks>
  )
}

export default Links;
