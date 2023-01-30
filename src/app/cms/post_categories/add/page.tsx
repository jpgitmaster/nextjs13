'use client'
import dynamic from 'next/dynamic'
import Loader from '@/utils/RotatingLoader'
import StatusMessage from '@/utils/StatMessage'
import AddCategoryController from './controller'
import styles from './../styles/Posts.module.scss'
const Editor = dynamic(() => import('@/utils/Editor'), { ssr: false });
const AddCategory = () => {
  const {
    // STATES
    category,
    error,
    loader,
    statusData,
    configEditor,

    // HANDLES
    handleChange,
    handleContent,
    handleSubmit,
} = AddCategoryController();
  return (
    <div className={styles.innerpage}>
      { loader && <Loader />}
      { statusData.message && <StatusMessage status={statusData} redirect={'/cms/post_categories'} />}
        <form className={styles.categoryForm} onSubmit={(e) => handleSubmit(e)} autoComplete='off'>
          <h3 className={styles.formTitle}>Add Category</h3>
          <div className={styles.npt + (error.name ? ' '+styles.err : '')}>
            {error.name &&
            <div className={`${styles.popover} ${styles.flipInY}`}>
                <div className={styles.arrow}></div>
                <div className={styles.popoverBody}>
                    <div className={styles.errmsg}>
                        {error.name}
                    </div>
                </div>
            </div>
            }
            <label className={styles.lbl}>Category Name<span>*</span></label>
            <input name='name' type='text' value={category.name} onChange={handleChange} />
          </div>
          <div className={styles.npt + (error.code ? ' '+styles.err : '')}>
              {error.code &&
              <div className={`${styles.popover} ${styles.flipInY}`}>
                  <div className={styles.arrow}></div>
                  <div className={styles.popoverBody}>
                      <div className={styles.errmsg}>
                          {error.code}
                      </div>
                  </div>
              </div>
              }
              <label className={styles.lbl}>Code <span>*</span></label>
              <input name='code' type='text' value={category.code} onChange={handleChange} />
          </div>
          <div className={styles.npt}>
            <label className={styles.lbl}>Title</label>
            <input name='title' type='text' value={category.title || ''} onChange={handleChange} />
          </div>
          <div className={styles.npt}>
              <label className={styles.lbl}>Description</label>
              <Editor content={category.description} config={configEditor} handleContent={handleContent} />
          </div>
          <button type='submit' className={`${styles.button} ${styles.btngreen}`}>Add Category</button>
        </form>
    </div>
  )
}

export default AddCategory;