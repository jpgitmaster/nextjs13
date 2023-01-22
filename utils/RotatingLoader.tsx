import React, { Fragment } from 'react';
import styles from './styles/Utils.module.scss';
const Loader = () => {
    return (
        <Fragment>
            <div className={styles.loader}>
                <div className={styles.bg}></div>
                <div className={styles.spinner}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>    
        </Fragment>
    )
}
export default Loader;