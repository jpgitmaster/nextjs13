import Image from 'next/image'
import Link from 'next/link'
import SubLinks from './sublinks'
import styles from './styles/Front.module.scss'
const Front = () => {
  return (
    <SubLinks>
      <div className={styles.innerpage}>
        <h3 className={styles.formTitle}>Front Details</h3>
        <Link href='/cms/front/update' className={`${styles.button} ${styles.btnblue}`}>
          <Image src='/svgs/edit_icon.svg' className={styles.edit_icon} alt='Edit Icon' priority width={20} height={25} />
          <span>
            Update Front
          </span>
        </Link>
      </div>
    </SubLinks>
  )
}
export default Front;
