'use client'
import dynamic from 'next/dynamic'
import AddPostController from './controller'
import Loader from '@/utils/RotatingLoader'
import StatusMessage from '@/utils/StatMessage'
import styles from './../../styles/Posts.module.scss'
import '@/styles/global.css'
const Editor = dynamic(() => import('@/utils/Editor'), { ssr: false })
const AddPost = () => {
    const {
        // STATES
        post,
        categoryID,
        error,
        loader,
        statusData,
        configEditor,
  
        // HANDLES
        handleChange,
        handleContent,
        handleSubmit,
    } = AddPostController();
    return (
        <div className={styles.innerpage}>
            <h3 className={styles.formTitle}>Add Post</h3>
            { loader && <Loader />}
            { statusData.message && <StatusMessage status={statusData} redirect={'/cms/post_categories/'+categoryID} />}
            <div className={styles.columns}>
                <div className={`${styles.column} ${styles.w70}`}>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
                <div className={`${styles.column} ${styles.w30}`}>
                    <form className={styles.postForm} onSubmit={(e) => handleSubmit(e)} autoComplete='off'>
                        <div className={`${styles.columns}`}>
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
                                        <input name='title' type='text' value={post.title} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.column} ${styles.w100}`}>
                                <div className={styles.inputWrapper}>
                                    <div className={styles.npt}>
                                        <label className={styles.lbl}>Image Code</label>
                                        <input name='imagecode' type='text' value={post.imagecode} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.column} ${styles.w100}`}>
                                <div className={styles.inputWrapper}>
                                    <div className={styles.npt} style={{paddingBottom: 0}}>
                                        <label className={styles.lbl}>Page Content</label>
                                        <Editor content={post.content} config={configEditor} handleContent={handleContent} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type='submit' className={`${styles.button} ${styles.btngreen}`}>Add Post</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
  }
export default AddPost;