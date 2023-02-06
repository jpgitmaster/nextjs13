'use client'
import styles from './../styles/Images.module.scss'
import AddImagesController from './controller'
const Images = () => {
  const {
    // STATES
    image,
    

    // HANDLES
    handleFileChange,
    handleSubmit,
  } = AddImagesController();
  return (
    <>
      <form className={styles.imageForm} encType="multipart/form-data" onSubmit={(e) => handleSubmit(e)} autoComplete='off'>
        <div className={styles.npt+' '+styles.isFile}>
          <div className={styles.inputWrapper}>
              <label className={styles.lbl}>
                  Browse Image: <span>*</span>
              </label>
              <div className={styles.file_uploader}>
                  <label className={styles.label_button}>
                      <span>Browse</span>
                      <input type='file' name='imgname' multiple value={image.imgname} onChange={handleFileChange} />
                  </label>
                  <input type='text' readOnly={true} value={image.imgdetails.name || ''} />
              </div>
          </div>
        </div>
        <button type='submit' className={`${styles.button} ${styles.btngreen}`}>Add Image</button>
      </form>
    </>
  )
}

export default Images;
