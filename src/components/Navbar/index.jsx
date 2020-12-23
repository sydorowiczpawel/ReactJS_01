import React from 'react';
import styles from "./Navbar.module.css";
import Link from "../Link";
import Image from "../../assets/klocek_b.png"

const Navbar = () => {
    return <div className={styles.Navbar}>
        <div className={styles.Logo}>
            <img src={Image} alt = "Logo firmy"/>
            <p>eagleCLUB</p>
        </div>
        <div className={styles.LinksContainer}>
            <Link name="kontakt" to="/kontakt" />
            <Link name="logowanie" to="/log"/>
            <Link name="rejestracja" to="/sign"/>
        </div>
    </div>
};

export default Navbar;