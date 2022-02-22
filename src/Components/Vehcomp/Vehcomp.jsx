import React from "react";
import styles from "./vehcomp.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import TrackModal from "../Modals/TrackModal";

const Vehcomp = ({ name, color, action, tracking, tracking2, img }) => {
  const [first, setFirst] = useState(false);
  return (
    <>
      <div className={styles.main} id="vehcompmain">
        <TrackModal show={first} closeModal={() => setFirst(false)} />
        <div className={styles.truck}>
          <FontAwesomeIcon
            icon={faTruck}
            className={styles.truckk}
            flip="horizontal"
            size="2x"
            id="truck"
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
        <div className={styles.user}>
          <img src={img} alt="" />
          <div>
            <h1>{name}</h1>
            <p>Transporter</p>
          </div>
        </div>
        <div className={styles.transit}>
          <div className={styles.transitin}>
            <div className={styles.transinner}>
              <div style={{ backgroundColor: color }}></div>
              <h1>{action}</h1>
            </div>
            <button
              className={styles.trackset1}
              onClick={() => {
                setFirst(true);
              }}
              id="vehcompactivebtn"
            >
              {" "}
              {tracking}{" "}
            </button>
            <button className={styles.trackset} id="vehcompactivebtn">
              {" "}
              {tracking2}{" "}
            </button>
          </div>
          <div className={styles.menu} id="vehcompmenu">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Vehcomp;
