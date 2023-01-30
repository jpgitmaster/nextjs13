'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles/Images.module.scss'
const Images = () => {
  return (
    <div className={styles.innerpage}>
      <Link href='/cms/images/add' className={`${styles.button} ${styles.btnblue}`}>
        <Image src='/svgs/plus_icon.svg' className={styles.plus_icon}  alt='Add Icon' width={20} height={25} />
        <span>
          Add Image
        </span>
      </Link>
    </div>
  )
}

export default Images;
