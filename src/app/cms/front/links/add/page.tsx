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
      links_arr,
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
        <div className={styles.innerpage_head}>
          <h3 className={styles.formTitle}>Add Link</h3>
        </div>
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
                {
                  links_arr.length && <option value='1'>Child</option>
                }
              </select>
          </div>
          {
            link.depth == 1 &&
            <div className={styles.npt}>
                <label className={styles.lbl}>Parent:</label>
                <select name='parentId' value={link.parentId} onChange={handleChange}>
                    <option></option>
                    {
                        links_arr.length && links_arr.map((link: { [x: string]: string }) => link.parent == null && <option key={link.id} value={link.id}>{link.name}</option>)
                    }
                </select>
            </div>
          }
          <button type='submit' className={`${styles.button} ${styles.btngreen}`}>Add Link</button>
        </form>
      </div>
    </SubLinks>
  )
}

export default AddLink;