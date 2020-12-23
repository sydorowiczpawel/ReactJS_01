import React from 'react';
import { Link as ReactRouterLink } from "react-router-dom";
import styles from "./Link.module.css";

const Link = ({name, to}) => {
    return <div className={styles.Link}>
        <ReactRouterLink to={to}>{name}</ReactRouterLink>
    </div>
};

export default Link;