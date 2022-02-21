import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./midmodals.module.css";
import { motion } from "framer-motion";

const midVariants = {
  hover: {
    scale: 1.1,
  },
};

const Midmodals = ({ register, count, join, color }) => {
  return (
    <>
      <motion.div
        className={styles.container}
        variants={midVariants}
        whileHover="hover"
        id="midmodcon"
      >
        <div className={styles.left}>
          <div className={styles.leftinner}>
            <section>
              <h4>{register}</h4>
            </section>
            <h1>{count}</h1>
            <p>{join}</p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightinner} style={{ backgroundColor: color }}>
            <FontAwesomeIcon icon={faUser} size="lg" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Midmodals;
