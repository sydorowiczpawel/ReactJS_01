import React from 'react';
import styles from "./Content.module.css";
import Image1 from "../../assets/beagleGeneza.png"
import Image2 from "../../assets/dieta.png"
import Image3 from "../../assets/madrybeagle.png"
import Image4 from "../../assets/rodzinny.png"
import Image5 from "../../assets/galeria.png"

const Content = () => {
    return <div>
        <div className={styles.Content}>
            <div style={{top: 970}} className={styles.MainContent}>
                <h3>Geneza, czyli skąd Beagle pochodzi</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam sed velit nec justo tristique egestas.
                    Proin eget facilisis tortor. Nulla eu ante velit.
                    Pellentesque habitant morbi tristique senectus et
                    netus et malesuada fames ac turpis egestas.</p>
            </div>
            <div className={styles.ContentImg}>
                <img src = {Image1} ale = "Pies"/>
            </div>
        </div>
        <div className={styles.Content}>
            <div style={{top: 1390}}  className={styles.MainContent}>
                <h3>Dieta, czyli co Beagle lubi, a co musi jeść.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam sed velit nec justo tristique egestas.
                    Proin eget facilisis tortor. Nulla eu ante velit.
                    Pellentesque habitant morbi tristique senectus et
                    netus et malesuada fames ac turpis egestas.</p>
            </div>
            <div className={styles.ContentImg}>
                <img src = {Image2} ale = "Pies"/>
            </div>
        </div>
        <div className={styles.Content}>
            <div style={{top: 1810}} className={styles.MainContent}>
                <h3>Co zrobić żeby słuchał?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam sed velit nec justo tristique egestas.
                    Proin eget facilisis tortor. Nulla eu ante velit.
                    Pellentesque habitant morbi tristique senectus et
                    netus et malesuada fames ac turpis egestas.</p>
            </div>
            <div className={styles.ContentImg}>
                <img src = {Image3} ale = "Pies"/>
            </div>
        </div>
        <div className={styles.Content}>
            <div style={{top: 2230}} className={styles.MainContent}>
                <h3>Życie rodzinne - jaki dom wybrć?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam sed velit nec justo tristique egestas.
                    Proin eget facilisis tortor. Nulla eu ante velit.
                    Pellentesque habitant morbi tristique senectus et
                    netus et malesuada fames ac turpis egestas.</p>
            </div>
            <div className={styles.ContentImg}>
                <img src = {Image4} ale = "Pies"/>
            </div>
        </div>
        <div className={styles.Content}>
            <div className={styles.ContentImg}>
                <img src = {Image5} ale = "Pies"/>
            </div>
            <div style={{top: 2650}} className={styles.MainContent}>
                <h3>Galeria szczeniaczków</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam sed velit nec justo tristique egestas.
                    Proin eget facilisis tortor. Nulla eu ante velit.
                    Pellentesque habitant morbi tristique senectus et
                    netus et malesuada fames ac turpis egestas.</p>
            </div>
        </div>
    </div>
};

export default Content;