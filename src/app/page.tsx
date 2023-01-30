
'use client';
import Axios from 'axios'
import { useState } from 'react'
import styles from './layouts/styles/WebLayout.module.scss'
export default function Home() {
  const [image, setImage] = useState<any>()
  const handleFileChange = (event: any) => {
    const targetFile = event.target.files[0]
    console.log(targetFile)
    setImage(targetFile)
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const { data } = await Axios({
      method: 'POST',
      url: '/api/upload',
      data: {
        name: image.name,
        type: image.type
      }
    })
    const url = data.url ? data.url : ''
    // console.log(url)
    if(url){
      await Axios({
        url: url,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/form-data'
        },
        data: image
      }).then((success) => {
        console.log('result')
        const imageURL = url.split('?')[0]
        console.log(success)
        console.log(imageURL)
      }).catch((err) => {
        console.log(err)
      })
      setImage(null)
    }
  }
  
  return (
    <main>
      {/* <form onSubmit={(e) => handleSubmit(e)} autoComplete='off' encType='multipart/form-data'>
        <input type='file' name='imgname' onChange={handleFileChange} />
        <button type='submit'>Add Image</button>
      </form> */}
      <div className={styles.layer1}>
        
      </div>
      <div className={styles.layer2}>
        <h1>Services Offered</h1>
        <div className={styles.columns}>
          <div className={`${styles.column} ${styles.w33}`}>
            <div className={styles.service}>
              <div className={styles.icon} style={{backgroundColor: '#d074eb'}}></div>
              <h3>Customization</h3>
            </div>
          </div>
          <div className={`${styles.column} ${styles.w33}`}>
            <div className={styles.service}>
            <div className={styles.icon} style={{backgroundColor: '#35e2af'}}></div>
              <h3>Responsiveness</h3>
            </div>
          </div>
          <div className={`${styles.column} ${styles.w33}`}>
            <div className={styles.service}>
              <div className={styles.icon} style={{backgroundColor: '#f29d15'}}></div>
              <h3>Reliability</h3>
            </div>
          </div>
          <div className={`${styles.column} ${styles.w33}`}>
            <div className={styles.service}>
              <div className={styles.icon} style={{backgroundColor: '#ff0957'}}></div>
              <h3>Security</h3>
            </div>
          </div>
          <div className={`${styles.column} ${styles.w33}`}>
            <div className={styles.service}>
              <div className={styles.icon} style={{backgroundColor: '#a215f2'}}></div>
              <h3>Value for Money</h3>
            </div>
          </div>
          <div className={`${styles.column} ${styles.w33}`}>
            <div className={styles.service}>
              <div className={styles.icon} style={{backgroundColor: '#e3da05'}}></div>
              <h3>Ongoing Support</h3>
            </div>
          </div>
          <div className={`${styles.column} ${styles.w33}`}>
            <div className={styles.service}>
              <div className={styles.icon} style={{backgroundColor: '#2827f8'}}></div>
              <h3>Expertise</h3>
            </div>
          </div>
          <div className={`${styles.column} ${styles.w33}`}>
            <div className={styles.service}>
              <div className={styles.icon} style={{backgroundColor: '#4caf50'}}></div>
              <h3>Flexibility</h3>
            </div>
          </div>
          <div className={`${styles.column} ${styles.w33}`}>
            <div className={styles.service}>
              <div className={styles.icon} style={{backgroundColor: '#e32805'}}></div>
              <h3>Innovation</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
