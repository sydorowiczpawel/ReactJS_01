import React from 'react';
import styles from "./Footer.module.css";

const Footer = () => {
    return <div className={styles.Footer}>
        <div className={styles.DataContainer}>
            <div className={styles.Data}>Paweł Sydorowicz</div>
            <div className={styles.Data}>Informatyka NS</div>
            <div className={styles.Data}>Grupa II</div>
            <div className={styles.Data}>Index nr. 23759</div>
        </div>
    </div>
};

export default Footer;