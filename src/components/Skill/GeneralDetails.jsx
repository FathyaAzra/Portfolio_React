// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './Skilldetail.module.css';

export const GeneralDetails = () => {
    return (
        <div className={styles.skill} id='ComputerSkill'>
            <h1 className={styles.judul}>Language and Creative Skill</h1>
            <div className={styles.skillcontainer}>
                <div className={styles.cardlist}>
                    <div className={styles.card}>
                        <img className={styles.icon} src="" alt="" />
                        <h2>Indonesian Language</h2>
                        <p>Native</p>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.icon} src="" alt="" />
                        <h2>English Language</h2>
                        <p>Fluent</p>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.icon} src="" alt="" />
                        <h2>Japanese Language</h2>
                        <p>Fluent/N2</p>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.icon} src="" alt="" />
                        <h2>Digital Art</h2>
                        <p>75%</p>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.icon} src="" alt="" />
                        <h2>Music Composing</h2>
                        <p>90%</p>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.icon} src="" alt="" />
                        <h2>Music Mixing</h2>
                        <p>30%</p>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.icon} src="" alt="" />
                        <h2>Piano</h2>
                        <p>80%</p>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.icon} src="" alt="" />
                        <h2>Guitar</h2>
                        <p>50%</p>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.icon} src="" alt="" />
                        <h2>Violin</h2>
                        <p>50%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralDetails;
