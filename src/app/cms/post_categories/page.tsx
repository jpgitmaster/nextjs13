'use client'
import Image from 'next/image'
import Link from 'next/link'
import GetCategoriesController from './controller'
import styles from './styles/Posts.module.scss'
const PostCategories = () => {
  const {
    // STATES
    records,

    // HANDLES
    handleCheckAll,
    handleCheckbox,
    handleToggleRemove,
  } = GetCategoriesController();
  return (
    <div className={styles.innerpage}>
      <h3 className={styles.formTitle}>List Categories</h3>
      <Link href='/cms/post_categories/add' className={`${styles.button} ${styles.btnblue}`}>
        <Image src='/svgs/plus_icon.svg' className={styles.plus_icon}  alt='Add Icon' width={20} height={25} />
        <span>
          Add Category
        </span>
      </Link>
      <div className={styles.postsTable}>
        <div className={styles.postsTableHead}>
          <div className={styles.postsTableCell}>
            <label className={styles.checkbox}>
                <input type='checkbox' name='checkAll' checked={records.every(item => item.isChecked)} onChange={handleCheckAll} />
                <span className={styles.checkmark}></span>
            </label>
          </div>
          <div className={styles.postsTableCell}>
            Category
          </div>
          <div className={styles.postsTableCell}>
            Total
          </div>
          <div className={styles.postsTableCell}>
            Actions
          </div>
        </div>
        {
          records.map((record: any) =>
            <div className={styles.postsTableBody} key={record.id}>
              <div className={styles.postsTableCell}>
                <label className={styles.checkbox}>
                  <input type='checkbox' name={record.id} checked={record.isChecked || ''} onChange={(e) => handleCheckbox(e)} />
                  <span className={styles.checkmark}></span>
                </label>
              </div>
              <div className={styles.postsTableCell}>
                {record.name}
              </div>
              <div className={styles.postsTableCell}>
                {record._count.posts}
              </div>
              <div className={styles.postsTableCell}>
                <div className={styles.pageActions}>
                  <Link href={'/cms/post_categories/'+record.id} className={`${styles.button} ${styles.btnblue}`}>
                    <Image src='/svgs/view.svg'  alt='View Icon' width={18} height={20} />
                  </Link>
                  <Link href={'/cms/post_categories/'+record.id+'/update'} className={`${styles.button} ${styles.btnblue}`}>
                    <Image src='/svgs/edit_icon.svg' alt='Edit Icon' width={18} height={20} />
                  </Link>
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

export default PostCategories;
