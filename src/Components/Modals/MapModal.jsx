import React from "react";
import styles from "./mapmodal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faTruck } from "@fortawesome/free-solid-svg-icons";
import img from "../../assets/images/user.png";
import Maps from "./Maps/Maps";
import { motion } from "framer-motion";

const motionVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.2, duration: 1.5 },
  },
  exit: {
    transition: "none",
  },
};

const MapModal = ({ show, closeMaps, closeModal }) => {
  console.log(show, "maps");
  if (!show) {
    return null;
  }
  return (
    <div className={styles.maincontainer}>
      <motion.div
        className={styles.innercont}
        variants={motionVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        id="trackcont"
      >
        <div className={styles.clsbtn} id="clsbtn">
          <button
            onClick={() => {
              closeMaps();
              closeModal();
            }}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>
        <div className={styles.top} id="midwords">
          <h1>Location Found</h1>
          <p>Vehicles has been successfully located</p>
        </div>
        <div className={styles.middle}>
          <div className={styles.midleft}>
            <div className={styles.lefttop}>
              <div className={styles.ltdiv} id="midwords">
                <img src={img} alt="" />
                <div>
                  <h1>Johnson C</h1>
                  <p>Transporter</p>
                </div>
              </div>
              <div className={styles.views}>
                <h1>View</h1>
              </div>
            </div>
            <span></span>
            <div className={styles.leftmid} id="midwords">
              <h1>Maryland, Lagos NG</h1>
              <p>Current location</p>
            </div>
            <span></span>
            <div className={styles.leftbot} id="midwords">
              <h1>36 Mins</h1>
              <p>Time spent so far</p>
            </div>
          </div>
          <div className={styles.midright}>
            <Maps />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.truck}>
            <FontAwesomeIcon
              icon={faTruck}
              id="truck"
              flip="horizontal"
              size="2x"
            />
            <div>
              <h1>ET-272-KJA</h1>
              <p>Toyota Highlander 2004</p>
            </div>
          </div>
          <div className={styles.words}>
            <h1>Lagos</h1>
            <p>Start Location</p>
          </div>
          <div className={styles.words}>
            <h1>Ikeja</h1>
            <p>Destination</p>
          </div>
          <div className={styles.words}>
            <h1>In Transit</h1>
            <p>Status</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MapModal;
