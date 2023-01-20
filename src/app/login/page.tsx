'use client';
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import styles from './styles/Login.module.scss'
const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value });
  }
  
  const handleSubmit = async (e: any) => {
    e.preventDefault()
  }
  
  const handleGoogleLogin = async () => {
    return await signIn('google', {
      callbackUrl: '/cms/dashboard'
    })
  }
  return (
    <>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h3 className={styles.formTitle}>CMS Login</h3>
        <div className={styles.npt}>
          <label className={styles.lbl}>Email<span>*</span></label>
          <input name='email' type='email' value={user.email} onChange={handleChange} />
        </div>
        <div className={styles.npt}>
          <label className={styles.lbl}>Password<span>*</span></label>
          <input name='password' type='password' value={user.password} onChange={handleChange} />
        </div>
        <button type='submit' className={`${styles.button} ${styles.btnblue}`}>Login</button>
        <button type='button' onClick={handleGoogleLogin}>Google Login</button>
      </form>
    </>
  )
}

export default Login;