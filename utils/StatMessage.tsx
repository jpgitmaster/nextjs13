import React, { Fragment } from 'react';
import styles from './styles/Utils.module.scss';
import { useRouter } from "next/navigation";
const StatusMessage = (data: any) => {
    const router = useRouter();
    const { status } = data;
    const closeStatusMsg = () => {
        return router.push(data.redirect);
    }
    return (
        <Fragment>
            <div className={styles.loader}>
                <div className={styles.bg} onClick={closeStatusMsg}></div>
                <div className={styles.popmsg}>
                    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 130.2 130.2'>
                        <circle className={`${styles.path} ${styles.circle}`} fill='none' stroke='#14b11c' strokeWidth='6' strokeMiterlimit='10' cx='65.1' cy='65.1' r='62.1' />
                        <polyline className={`${styles.path} ${styles.check}`} fill='none' stroke='#14b11c' strokeWidth='6' strokeLinecap='round' strokeMiterlimit='10' points='100.2,40.2 51.5,88.8 29.8,67.5 ' />
                    </svg>
                    <div className={styles.popmsgDetails}>
                        <h4>{status.message}</h4>
                        <p>{status.submessage}</p>
                        <button className={`${styles.button} ${styles.btnblue}`} type='button' onClick={closeStatusMsg}>Ok</button>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
export default StatusMessage;