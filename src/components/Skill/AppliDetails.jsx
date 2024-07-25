// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './Skilldetail.module.css';

export const AppliDetails = () => {
    return (
        <div className={styles.skill} id='AppliDetails'>
            <h1 className={styles.judul}>Software Skill</h1>
            <div className={styles.skillcontainer}>
                <div className={styles.cardlist}>
                    <div className={styles.card}>
                        <img className={styles.icon} src="" alt="" />
                        <h2>Visual Studio Code</h2>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.icon} src="" alt="" />
                        <h2>Apache Netbeans</h2>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.icon} src="" alt="" />
                        <h2>Git & Github</h2>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.icon} src="" alt="" />
                        <h2>Microsoft Word</h2>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.icon} src="" alt="" />
                        <h2>Adobe Illustrator</h2>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.icon} src="" alt="" />
                        <h2>Adobe Audition</h2>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.icon} src="" alt="" />
                        <h2>FL Studio</h2>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.icon} src="" alt="" />
                        <h2>Android Studio</h2>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.icon} src="" alt="" />
                        <h2>Godot</h2>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.icon} src="" alt="" />
                        <h2>Cisco Packet Tracer</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliDetails;
