// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './Experience.module.css';

export const Experience = () => {
    return (
        <div className={styles.experience} id='Experience'>
            <h1 className={styles.judul}>Experience/Education</h1>
            <div className={styles.experiencecontainer}>
                <div className={styles.cardlist}>
                    <div className={styles.card}>
                        <h2>University of North Sumatera</h2>
                        <p>Student of Computer Science since 2022</p>
                    </div>
                    <div className={styles.card}>
                        <h2>IMILKOM Game Developer Competition 2024</h2>
                        <p>Winning 1st prize for game developer</p>
                    </div>
                    <div className={styles.card}>
                        <h2>Program Kreativitas Mahasiswa 2024</h2>
                        <p>Participant is PKM-KC section</p>
                    </div>
                    <div className={styles.card}>
                        <h2>Satria Data 2024</h2>
                        <p>Participant in SIC (Infographic) section</p>
                    </div>
                    <div className={styles.card}>
                        <h2>Gemastik 2024</h2>
                        <p>Participant in UI Design section</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
