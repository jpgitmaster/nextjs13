'use client'
import Link from 'next/link'
import Image from 'next/image'
import GetCategoryController from './controller'
import styles from './../styles/Posts.module.scss'
const ViewCategory = () => {
  const {
      // STATES
      category,
      categoryID,
      records,
      
      // HANDLES
      handleCheckbox,
      handleCheckAll,
      handleToggleRemove
  } = GetCategoryController()
  return (
    <div className={styles.innerpage}>
      <div className={styles.innerpage_head}>
        {
          category.name &&
          <h3 className={styles.formTitle}>
              {category.name}
          </h3>
        }
        <Link href={'/cms/post_categories/'+categoryID+'/add'} className={`${styles.button} ${styles.btnblue}`}>
          <Image src='/svgs/plus_icon.svg' className={styles.plus_icon} priority alt='Add Icon' width={20} height={25} />
          <span>
            Add Post
          </span>
        </Link>
      </div>
      
      <div className={styles.postsTable}>
        <div className={styles.postsTableHead}>
          <div className={styles.postsTableCell}>
            <label className={styles.checkbox}>
                <input type='checkbox' name='checkAll'
                  // checked={records.every(item => item.isChecked)}
                  onChange={handleCheckAll} />
                <span className={styles.checkmark}></span>
            </label>
          </div>
          <div className={styles.postsTableCell}>
            Post Title
          </div>
          <div className={styles.postsTableCell}>
            Actions
          </div>
        </div>
        {
        records && records.map((record) =>
            <div className={styles.postsTableBody} key={record.id}>
                <div className={styles.postsTableCell}>
                    <label className={styles.checkbox}>
                        <input type='checkbox' name={record.id} checked={record.isChecked || ''} onChange={(e) => handleCheckbox(e)} />
                        <span className={styles.checkmark}></span>
                    </label>
                </div>
                <div className={styles.postsTableCell}>
                    {
                        record.image ?
                        <div className={styles.postsImage}>
                            <Image 
                                src={'/uploads/'+record.image.imgname}
                                width={60}
                                height={35}
                                alt={record.image.name}
                                priority
                            />
                        </div>
                        : <div className={styles.postsImage}></div>
                    }
                    
                    {record.title}
                </div>
                <div className={styles.postsTableCell}>
                <div className={styles.pageActions}>
                  <Link href={'/cms/post_categories/'+categoryID+'/'+record.id} className={`${styles.button} ${styles.btnblue}`}>
                    <Image src='/svgs/view.svg'  alt='View Icon' width={18} height={20} />
                  </Link>
                  {
                    record.id &&
                    <Link href={'/cms/post_categories/'+categoryID+'/'+record.id+'/update'} className={`${styles.button} ${styles.btnblue}`}>
                        <Image src='/svgs/edit_icon.svg' alt='Edit Icon' width={18} height={20} />
                    </Link>
                  }
                  <div className={styles.onDelete}>
                    {
                      record.isRemove &&
                      <div className={`${styles.popover} ${styles.flipInY}`}>
                        <div className={styles.arrow}></div>
                        <div className={styles.popoverBody}>
                          <p>Are you sure you want to delete this record?</p>
                          <div>
                            <button type='button' className={`${styles.button} ${styles.btnblue}`}>
                              YES
                            </button>
                            <button type='button' className={`${styles.button} ${styles.btnred}`} onClick={() => handleToggleRemove(record)}>
                              NO
                            </button>
                          </div>
                        </div>
                      </div>

                    }
                    <button type='button' disabled={record.isRemove} className={`${styles.button} ${styles.btnred}`} onClick={() => handleToggleRemove(record)}>
                      <Image src='/svgs/trash.svg'  alt='Trash Icon' width={18} height={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
        )
        }
      </div>
    </div>
  )
}
export default ViewCategory;