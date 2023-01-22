'use client'
import SubLinks from '../../sublinks'
import AddLinkController from './controller'
import styles from './../../styles/Front.module.scss'
import Loader from '@/utils/RotatingLoader'
import StatusMessage from '@/utils/StatMessage'
const AddLink = () => {
  const {
      // STATES
      link,
      error,
      loader,
      statusData,

      // HANDLES
      handleNameChange,
      handleChange,
      handleSubmit,
  } = AddLinkController();
  return (
    <SubLinks>
      <div className={styles.innerpage}>
        { loader && <Loader />}
        { statusData.message && <StatusMessage status={statusData} redirect={'/cms/front/links'} />}
        <form className={styles.linkForm} onSubmit={(e) => handleSubmit(e)} autoComplete='off'>
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
            <label className={styles.lbl}>Name<span>*</span></label>
            <input name='name' type='text' value={link.name} onChange={handleNameChange} />
          </div>
          <div className={styles.npt + (error.slug ? ' '+styles.err : '')}>
            {error.slug &&
              <div className={`${styles.popover} ${styles.flipInY}`}>
                  <div className={styles.arrow}></div>
                  <div className={styles.popoverBody}>
                      <div className={styles.errmsg}>
                          {error.slug}
                      </div>
                  </div>
              </div>
            }
            <label className={styles.lbl}>Slug<span>*</span></label>
            <input name='slug' type='text' value={link.slug} onChange={handleChange} />
          </div>
          <div className={styles.npt}>
              <label className={styles.lbl}>Depth: <span>*</span></label>
              <select name='depth' value={link.depth} onChange={handleChange}>
                <option value='0'>Parent</option>
                <option value='1'>Child</option>
              </select>
          </div>
          <button type='submit' className={`${styles.button} ${styles.btngreen}`}>Add Link</button>
        </form>
      </div>
    </SubLinks>
  )
}

export default AddLink;