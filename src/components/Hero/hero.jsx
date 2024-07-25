// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './Hero.module.css';
import Foto from './../../assets/Foto_.jpg';

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <img className={styles.Foto} src={Foto} alt="foto?" />
            <div className={styles.description}>
                <h1 className={styles.judul}>Fathya Azra Nazmira</h1>
                <p className={styles.stat}>Computer Science undergraduate student</p>
                <p className={styles.intro}>
                    Hello! I’m a technology and creative enthusiast. <br />
                    I&apos;m a Computer Science student from University of North Sumatera <br />
                    and in a way to be a software engineer!
                </p>
                <a className={styles.startbutton} href="#Skill">
                    What I can do &gt;
                </a>
            </div>
            {/* cari cara background animasi/video */}
        </div>
    );
};

export default Hero;
