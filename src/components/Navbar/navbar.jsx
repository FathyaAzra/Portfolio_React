// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
    return <nav className={styles.navbar}>
        <a className={styles.title} href="/">Fathya&apos;s Space</a>
        <div className={styles.menu}>
            <ul>
                <li>
                    <a href="#Skill">Skill</a>
                </li>
                <li>
                    <a href="#Exp">Experience</a>
                </li>
                <li>
                    <a href="#Portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#Contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>;
};

export default Navbar;