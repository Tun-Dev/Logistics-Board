import React from "react";
import styles from "./sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTruck,
  faUserFriends,
  faUser,
  faShip,
  faFileInvoice,
  faCreditCard,
  faReceipt,
  faGear,
  faLineChart,
  faBarChart,
  faAreaChart,
  faLifeRing,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// const entranceMotion = {
//   hidden: {
//     x: "-50vw",
//   },
//   visible: {
//     x: 0,
//     transition: { delay: 0.4, duration: 1.5 },
//   },
// };

const midVariants = {
  hover: {
    scale: 1.1,
  },
};

const Sidebar = ({ home, vehicles }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className={styles.logo}>
            <h1>IPI</h1>
            <span className={styles.dot}></span>
          </div>
          <div className={styles.conMain}>
            <h4>MAIN MENU</h4>
            <Link to="/" className={styles.links}>
              <motion.button
                variants={midVariants}
                whileHover="hover"
                className={styles.clickable}
                onClick={home}
              >
                <div>
                  <FontAwesomeIcon
                    icon={faHome}
                    size="2x"
                    className="testing"
                  />
                </div>
                <h4>Home</h4>
              </motion.button>
            </Link>
            <Link to="/vehicles" className={styles.links}>
              <motion.button
                variants={midVariants}
                whileHover="hover"
                className={styles.clickable}
                onClick={vehicles}
              >
                <div>
                  <FontAwesomeIcon icon={faTruck} flip="horizontal" size="2x" />
                </div>
                <h4>Vehicles</h4>
              </motion.button>
            </Link>
            <button>
              <div>
                <FontAwesomeIcon icon={faUserFriends} size="2x" />
              </div>
              <h4>Transporters</h4>
            </button>
            <button>
              <div>
                <FontAwesomeIcon icon={faUser} size="2x" />
              </div>
              <h4>Customers</h4>
            </button>
            <button>
              <div>
                <FontAwesomeIcon icon={faShip} size="2x" />
              </div>
              <h4>Shipments</h4>
            </button>
          </div>
          <div className={styles.conInternal}>
            <h4>INTERNAL TOOLS</h4>
            <button>
              <div>
                <FontAwesomeIcon icon={faLifeRing} size="lg" size="2x" />
              </div>
              <h4>Support Tickets</h4>
            </button>
            <button>
              <div>
                <FontAwesomeIcon icon={faReceipt} size="2x" />
              </div>
              <h4>Invoices</h4>
            </button>
            <button>
              <div>
                <FontAwesomeIcon icon={faChartLine} size="2x" />
              </div>
              <h4>Analytics</h4>
            </button>
            <button>
              <div>
                <FontAwesomeIcon icon={faCreditCard} size="2x" />
              </div>
              <h4>Payments</h4>
            </button>
            <button>
              <div>
                <FontAwesomeIcon icon={faGear} size="2x" />
              </div>
              <h4>Settings</h4>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
