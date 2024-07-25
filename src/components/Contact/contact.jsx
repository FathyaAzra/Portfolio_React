// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './Contact.module.css';
import Discord from './../../assets/Logo_Discord.png';
import Mail from './../../assets/Logo_Mail.png';
import Twitter from './../../assets/Logo_Twitter.png';

export const Contact = () => {
    return <nav className={styles.contact}>
        <a className={styles.title} href="/">Contact Me!</a>
        <div className={styles.menu}>
            <ul>
                <li>
                    <img className={styles.icon} src={Mail} />
                    <p>fathyaazra@gmail.com</p>
                </li>
                <li>
                    <img className={styles.icon} src={Twitter} alt="" />
                    <p>Fathya1104</p>
                </li>
                <li>
                    <img className={styles.icon} src={Discord} alt="" />
                    <p>yonakana</p>
                </li>
            </ul>
        </div>
    </nav>;
};

export default Contact;