import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './midmodals.module.css'

const Midmodals = ({ register, count, join, color }) => {
    return (
        <>
            <div className={styles.container} >
                <div className={styles.left} >
                    <div className={styles.leftinner} >
                        <h4>{register}</h4>
                        <h1>{count}</h1>
                        <p>{join}</p>
                    </div>
                </div>
                <div className={styles.right} >
                    <div className={styles.rightinner} style={{ backgroundColor: color }} >
                        <FontAwesomeIcon icon={faUser} size="lg" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Midmodals