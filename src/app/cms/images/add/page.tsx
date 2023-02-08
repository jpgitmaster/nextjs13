'use client'
import Image from 'next/image'
import styles from './../styles/Images.module.scss'
import AddImagesController from './controller'
const Images = () => {
  const {
    // STATES
    image_,
    image,
    
    // HANDLES
    handleChange,
    handleFileChange,
    handleSubmit,
  } = AddImagesController();
  return (
    <div className={styles.innerpage}>
      <div className={styles.innerpage_head}>
        <h3 className={styles.formTitle}>Add Image</h3>
        <div className={styles.npt+' '+styles.isFile}>
          <div className={`${styles.button} ${styles.btnblue} ${styles.file_uploader}`}>
              <label className={styles.label_button}>
                  <span>Browse Image</span>
                  <input type='file' name='imgname' multiple value={image.imgname} onChange={handleFileChange} />
              </label>
          </div>
        </div>
      </div>
      <form className={styles.imageForm} encType="multipart/form-data" onSubmit={(e) => handleSubmit(e)} autoComplete='off'>
        {
          image_.length ?
          <>
           <div className={styles.columns}>
            {
              image_.map((image: any, index: any) =>
                <div key={index} className={`${styles.column} ${styles.w25}`}>
                  <div className={styles.imageContainer}>
                    <Image src={image.imageTarget} alt='Image' width="0" height="0" sizes="100vw" />
                    <div className={styles.npt}>
                      <label className={styles.lbl}>Image Name: <span>*</span></label>
                      <input name='name' type='text' value={image_[`${index}`]?.name || ''} onChange={(event) => handleChange(event, index)} />
                    </div>
                    <div className={styles.npt}>
                        <label className={styles.lbl}>Code <span>*</span></label>
                        <input name='keycode' type='text' value={image_[`${index}`]?.keycode || ''} onChange={(event) => handleChange(event, index)} />
                    </div>
                  </div>
                </div>
              )
            }
            </div>
            <button type='submit' className={`${styles.button} ${styles.btngreen}`}>Add Image</button>
          </>
          : ''
        }
      </form>
    </div>
  )
}

export default Images;
