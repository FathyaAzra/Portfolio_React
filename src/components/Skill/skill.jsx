// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styles from './Skill.module.css';
import ComputerDetails from './ComputerDetails.jsx';
import AppliDetails from './AppliDetails.jsx';
import GeneralDetails from './GeneralDetails.jsx';
import Computer from './../../assets/ComputerSkill.png';
import Appli from './../../assets/AppSkill.png';
import Creative from './../../assets/CreativeSkill.png';


export const Skill = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    // Render different components based on selectedCategory state
    const renderDetailsComponent = () => {
        switch (selectedCategory) {
            case 'complang':
                return <ComputerDetails />;
            case 'appli':
                return <AppliDetails />;
            case 'creative':
                return <GeneralDetails />;
            default:
                return null;
        }
    };

    return (
        <div className={styles.skill} id='Skill'>
            <h1 className={styles.judul}>Skill</h1>
            <div className={styles.skillcontainer}>
                <div className={styles.cardlist}>
                    <div className={styles.card}>
                        <img className={styles.skillimage} src={Computer} alt="programming" />
                        <h2 className={styles.skillname}>Computer Skill</h2>
                        <div className={styles.tombolmore} id='complang'>
                            <a href="javascript:void(0)" onClick={() => handleCategoryClick('complang')}>Click for more</a>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.skillimage} src={Appli} alt="application" />
                        <h2 className={styles.skillname}>Application Skill</h2>
                        <div className={styles.tombolmore} id='appli'>
                            <a href="javascript:void(0)" onClick={() => handleCategoryClick('appli')}>Click for more</a>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.skillimage} src={Creative} alt="creative" />
                        <h2 className={styles.skillname}>Language and Creative Skill</h2>
                        <div className={styles.tombolmore} id='creative'>
                            <a href="javascript:void(0)" onClick={() => handleCategoryClick('creative')}>Click for more</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Render the selected details component */}
            <div className={styles.detailsContainer}>
                {renderDetailsComponent()}
            </div>
        </div>
    );
};

export default Skill;
