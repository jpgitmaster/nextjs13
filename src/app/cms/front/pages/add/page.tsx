'use client'
import dynamic from 'next/dynamic'
import SubLinks from '../../sublinks'
import AddPageController from './controller'
import styles from './../../styles/Front.module.scss'
import Loader from '@/utils/RotatingLoader'
import StatusMessage from '@/utils/StatMessage'
import Dropdown from './Dropdown'
const Editor = dynamic(() => import('@/utils/Editor'), { ssr: false })
const AddPage = () => {
  const {
      // STATES
      page,
      error,
      loader,
      statusData,
      configEditor,

      // HANDLES
      handleChange,
      handleLinkID,
      handleContent,
      handleSubmit,
  } = AddPageController();
  return (
    <SubLinks>
      <div className={styles.innerpage}>
        { loader && <Loader />}
        { statusData.message && <StatusMessage status={statusData} redirect={'/cms/front/pages'} />}
        <form className={styles.pageForm} onSubmit={(e) => handleSubmit(e)} autoComplete='off'>
          <div className={`${styles.columns}`}>
            <div className={`${styles.column} ${styles.w33}`}>
              <div className={styles.inputWrapper}>
                <Dropdown error={error} handleLinkID={handleLinkID} />
              </div>
            </div>
            <div className={`${styles.column} ${styles.w33}`}>
              <div className={styles.inputWrapper}>
                <div className={styles.npt}>
                  <label className={styles.lbl}>Page Template:</label>
                  <select name='pageTemplate' value={page.pageTemplate || ''} onChange={handleChange}>
                      <option></option>
                      <option value='blogtpl'>Blog Template</option>
                  </select>
                </div>
              </div>
            </div>
            <div className={`${styles.column} ${styles.w33}`}>
              <div className={styles.inputWrapper}>
                <div className={styles.npt}>
                    <label className={styles.lbl}>Post Category:</label>
                    <input name='postCategory' type='text' value={page.postCategory} onChange={handleChange} />
                  </div>
              </div>
            </div>
            <div className={`${styles.column} ${styles.w100}`}>
              <div className={styles.inputWrapper}>
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
              </div>
            </div>
            <div className={`${styles.column} ${styles.w100}`}>
              <div className={styles.inputWrapper}>
                <div className={styles.npt} style={{paddingBottom: 0}}>
                  <label className={styles.lbl}>Page Content</label>
                  <Editor content={page.content} config={configEditor} handleContent={handleContent} />
                </div>
              </div>
            </div>
          </div>
          <button type='submit' className={`${styles.button} ${styles.btngreen}`}>Add Page</button>
        </form>
      </div>
    </SubLinks>
  )
}

export default AddPage;