import React from 'react';
import styles from "./Link.module.css";

const Link = ({name}) => {
    return <div className={styles.Link}>{name}</div>
};

export default Link;