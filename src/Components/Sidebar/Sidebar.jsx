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
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "./Navbar";

const midVariants = {
  hover: {
    scale: 1.1,
  },
};

const Sidebar = ({ home, vehicles }) => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className={styles.container} id="sidebarcontainer">
        <div className={styles.navbarmain} id="navbarmain">
          <Navbar />
        </div>
        <div className={styles.sidebar}>
          <div className={styles.logo} id="logo">
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
                id="sidebaricon2"
              >
                <div>
                  <FontAwesomeIcon icon={faHome} />
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
                id="sidebaricon3"
              >
                <div>
                  <FontAwesomeIcon icon={faTruck} flip="horizontal" />
                </div>
                <h4>Vehicles</h4>
              </motion.button>
            </Link>
            <button>
              <div id="sidebaricon">
                <FontAwesomeIcon icon={faUserFriends} />
              </div>
              <h4>Transporters</h4>
            </button>
            <button>
              <div id="sidebaricon">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <h4>Customers</h4>
            </button>
            <button>
              <div id="sidebaricon">
                <FontAwesomeIcon icon={faShip} />
              </div>
              <h4>Shipments</h4>
            </button>
          </div>
          <div className={styles.conInternal}>
            <h4>INTERNAL TOOLS</h4>
            <button>
              <div id="sidebaricon">
                <FontAwesomeIcon icon={faLifeRing} size="lg" />
              </div>
              <h4>Support Tickets</h4>
            </button>
            <button>
              <div id="sidebaricon">
                <FontAwesomeIcon icon={faReceipt} />
              </div>
              <h4>Invoices</h4>
            </button>
            <button>
              <div id="sidebaricon">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <h4>Analytics</h4>
            </button>
            <button>
              <div id="sidebaricon">
                <FontAwesomeIcon icon={faCreditCard} />
              </div>
              <h4>Payments</h4>
            </button>
            <button>
              <div id="sidebaricon">
                <FontAwesomeIcon icon={faGear} className="testing" />
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
