import React from "react";
import styles from "./vehicles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faUser,
  faMagnifyingGlass,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import img from "../../assets/images/user.png";
import Vehcomp from "../Vehcomp/Vehcomp";
import Sidebar from "../Sidebar/Sidebar";
import { motion } from "framer-motion";
import img2 from "../../assets/images/user.png";
import img3 from "../../assets/images/user2.jpg";

const countsMotion = {
  hidden: {
    x: "90vw",
  },
  visible: {
    x: 0,
    transition: { delay: 0, duration: 1.5, ease: "easeInOut" },
  },
  hover: {
    scale: 1.1,
  },
};

const wordsMotion = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0, duration: 1.5, ease: "easeInOut" },
  },
};

const Vehicles = () => {
  return (
    <>
      <div className={styles.vehiclemain}>
        <div>
          <Sidebar />
        </div>
        <div className={styles.vehmain} id="vehhomemain">
          <div className={styles.vehmaininner}>
            <div className={styles.top}>
              <motion.div
                variants={countsMotion}
                initial="hidden"
                animate="visible"
                className={styles.innertop}
              >
                <div className={styles.bell} id="vehhomebell">
                  <FontAwesomeIcon icon={faBell} size="2x" />
                </div>
                <span></span>
                <div className={styles.userpic}>
                  <img src={img} alt="" srcset="" />
                </div>
              </motion.div>
            </div>
            <motion.div
              variants={wordsMotion}
              initial="hidden"
              animate="visible"
              className={styles.midwords}
              id="midwords"
            >
              <h2>Vehicles</h2>
              <p>Manage and Track All Vehicles On The IPI Network</p>
            </motion.div>
            <motion.div
              variants={wordsMotion}
              initial="hidden"
              animate="visible"
              className={styles.bottom}
              id="vehbottom"
            >
              <div className={styles.bottomtop} id="vehbottomtop">
                <div className={styles.btleft}>
                  <div className={styles.clickable}>
                    <h4>ALL VEHICLES</h4>
                  </div>
                  <div>
                    <h4>TRUCKS</h4>
                  </div>
                  <div>
                    <h4>TRAILERS</h4>
                  </div>
                  <div>
                    <h4>TANKERS</h4>
                  </div>
                </div>
                <div className={styles.btright}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className={styles.search}
                    color="#9BA3A0"
                  />
                </div>
              </div>
              <div className={styles.bottombottom}>
                <Vehcomp
                  name="Johnson C"
                  color="#2FA072"
                  action="In Transit"
                  tracking="Track Shipment"
                  img={img2}
                />
                <Vehcomp
                  name="Jeremy Lopez"
                  color="#ED2635"
                  action="Cancelled"
                  tracking2="View Details"
                  img={img3}
                />
                <Vehcomp
                  name="Indiana Jones"
                  color="#2463F2"
                  action="Completed"
                  tracking2="View Details"
                  img={img2}
                />
                <Vehcomp
                  name="Johnson C"
                  color="#2FA072"
                  action="In Transit"
                  tracking2="Track Shipment"
                  img={img3}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vehicles;
