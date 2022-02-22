import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./midmodals2.module.css";

const Midmodals2 = ({ register, count, join, color, img }) => {
  return (
    <>
      <div className={styles.container} id="midmodcon2">
        <div className={styles.left}>
          <div className={styles.leftinner}>
            <div>
              <h4>{register}</h4>
              <h1>{count}</h1>
              <p>{join}</p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightinner} style={{ backgroundColor: color }}>
            <FontAwesomeIcon icon={img} size="lg" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Midmodals2;
