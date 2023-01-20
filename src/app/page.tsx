
'use client';
import Axios from 'axios'
import { useState } from 'react'
import styles from './page.module.css'

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
    <main className={styles.main}>
      <form onSubmit={(e) => handleSubmit(e)} autoComplete='off' encType='multipart/form-data'>
        <input type='file' name='imgname' onChange={handleFileChange} />
        <button type='submit'>Add Image</button>
      </form>
    </main>
  )
}
