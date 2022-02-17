import React from 'react'
import styles from './vehicles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import img from '../../assets/images/user.png'

const Vehicles = () => {
    return (
        <div className={styles.main} >
            <div className={styles.maininner} >
                <div className={styles.top} >
                    <div className={styles.innertop} >
                        <div className={styles.bell} >
                            <FontAwesomeIcon icon={faBell} size="2x" />
                        </div>
                        <span></span>
                        <div className={styles.userpic} >
                            <img src={img} alt="" srcset="" />
                        </div>
                    </div>
                </div>
                <div className={styles.midwords} >
                    <h2>Vehicles</h2>
                    <p>Manage and Track All Vehicles On The IPI Network</p>
                </div>
            </div>
        </div>
    )
}

export default Vehicles