import React from "react";
import styles from "./home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faUserFriends, faShip } from "@fortawesome/free-solid-svg-icons";
import img from "../../assets/images/user.png";
import Midmodals from "../MidModals/Midmodals";
import Midmodals2 from "../MidModals/Midmodals2";
import Charts from "../Charts/Charts";
import Charts2 from "../Charts/Charts2";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const chartsMotion = {
  hidden: {
    y: "50vh",
  },
  visible: {
    y: 0,
    transition: { delay: 0, duration: 1.5, ease: "easeInOut" },
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

const Home = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 800px)",
  });

  const countsMotion = isMobile
    ? {
        hidden: {
          x: "90vw",
        },
        visible: {
          x: 0,
          transition: { delay: 2.0, duration: 1.5, ease: "easeInOut" },
        },
        hover: {
          scale: 1.1,
        },
      }
    : {
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
  const wordsMotion = isMobile
    ? {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: { delay: 0, duration: 1.5, ease: "easeInOut" },
        },
      }
    : {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: { delay: 0, duration: 1.5, ease: "easeInOut" },
        },
      };

  const [chart, setChart] = useState(0);

  const chart1 = () => setChart(0);
  const chart2 = () => setChart(1);

  return (
    <>
      <div className={styles.homemain}>
        <div>
          <Sidebar />
        </div>
        <div className={styles.main} id="vehhomemain">
          <div className={styles.maininner}>
            <div className={styles.top}>
              <motion.div
                className={styles.innertop}
                variants={countsMotion}
                initial="hidden"
                animate="visible"
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
            <div className={styles.middle}>
              <motion.div
                className={styles.midwords}
                variants={wordsMotion}
                initial="hidden"
                animate="visible"
                id="midwords"
              >
                <h2>Good Evening, Zeus</h2>
                <p>
                  Glad to have you back, here's an overview of your operations
                  today
                </p>
              </motion.div>
              <motion.div
                className={styles.mods}
                variants={countsMotion}
                initial="hidden"
                animate="visible"
              >
                <Midmodals
                  color="#386CE2"
                  register="REGISTERED CUSTOMERS"
                  count="380.2K"
                  join="3467 Joined Today"
                />
                <Midmodals2
                  color="#0fc4af"
                  register="REGISTERED TRANSPORTERS"
                  count="15.6M"
                  join="3467 Onboarded Today"
                  img={faUserFriends}
                />
                <Midmodals2
                  color="#de387e"
                  register="TOTAL SHIPMENTS"
                  count="348.9K"
                  join="3467 Shipped Today"
                  img={faShip}
                />
              </motion.div>
            </div>
            <div className={styles.bottom}>
              <motion.div
                className={styles.shipdiv}
                variants={wordsMotion}
                initial="hidden"
                animate="visible"
              >
                <div className={styles.shipleft} id="midwords">
                  <h1>Shipments</h1>
                  <p>
                    Shipping is going pretty well today, Here's what we have
                  </p>
                </div>
                <div className={styles.shipright}>
                  <div className={styles.days} id="days">
                    <button>1D</button>
                    <button>5D</button>
                    <motion.button
                      variants={countsMotion}
                      whileHover="hover"
                      className={styles.clickable}
                      onClick={chart1}
                    >
                      1M
                    </motion.button>
                    <motion.button
                      variants={countsMotion}
                      whileHover="hover"
                      className={styles.clickable}
                      onClick={chart2}
                    >
                      1Y
                    </motion.button>
                    <button>Max</button>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={chartsMotion}
                initial="hidden"
                animate="visible"
                className={styles.charts}
                id="charts"
              >
                {chart === 0 ? <Charts /> : <Charts2 />}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
