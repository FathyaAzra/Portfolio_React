// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './Portfolio.module.css';

export const Portfolio = () => {
    return (
        <div className={styles.skill} id='Portfolio'>
            <h1 className={styles.judul}>Portfolio</h1>
            <div className={styles.skillcontainer}>
                <div className={styles.cardlist}>
                    <div className={styles.card}>
                        <h2 className={styles.namaport}>React Website (here)</h2>
                        <div className={styles.tombolgithub} id='port1'>
                            <a href="/">Github</a>
                        </div>
                        {/* <div className={styles.tombolweb} id='port1'>
                            <a href="/">Website</a>
                        </div> */}
                    </div>
                    <div className={styles.card}>
                        <h2 className={styles.namaport}>POS Project Java Software</h2>
                        <div className={styles.tombolgithub} id='port2'>
                            <a href="https://github.com/Khaisa-Shafa/POSProject_PBO">Github</a>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <h2 className={styles.namaport}>IN DEVELOPMENT</h2>
                        {/* <div className={styles.tombolgithub} id='port3'>
                            <a href="/">Github</a>
                        </div>
                        <div className={styles.tombolweb} id='port3'>
                            <a href="/">Website</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
