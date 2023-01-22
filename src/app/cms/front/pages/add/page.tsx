'use client'
import SubLinks from '../../sublinks'
import AddPageController from './controller'
import styles from './../../styles/Front.module.scss'
import Loader from '@/utils/RotatingLoader'
import StatusMessage from '@/utils/StatMessage'
const AddPage = () => {
  const {
      // STATES
      page,
      error,
      loader,
      statusData,

      // HANDLES
      handleChange,
      handleSubmit,
  } = AddPageController();
  return (
    <SubLinks>
      <div className={styles.innerpage}>
        { loader && <Loader />}
        { statusData.message && <StatusMessage status={statusData} redirect={'/cms/front/pages'} />}
        <form className={styles.linkForm} onSubmit={(e) => handleSubmit(e)} autoComplete='off'>
          <div className={styles.npt + (error.title ? ' '+styles.err : '')}>
            {error.title &&
              <div className={`${styles.popover} ${styles.flipInY}`}>
                  <div className={styles.arrow}></div>
                  <div className={styles.popoverBody}>
                      <div className={styles.errmsg}>
                          {error.title}
                      </div>
                  </div>
              </div>
            }
            <label className={styles.lbl}>Title<span>*</span></label>
            <input name='title' type='text' value={page.title} onChange={handleChange} />
          </div>
          <button type='submit' className={`${styles.button} ${styles.btngreen}`}>Add Page</button>
        </form>
      </div>
    </SubLinks>
  )
}

export default AddPage;