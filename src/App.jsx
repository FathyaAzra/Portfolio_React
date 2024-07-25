import styles from "./App.module.css";
import { Navbar } from './components/Navbar/navbar';
import { Hero } from './components/Hero/hero';
import { Skill } from './components/Skill/skill';
import { Experience } from "./components/Experience/experience";
import { Portfolio } from './components/Portfolio/portfolio';
import { Contact } from './components/Contact/contact';

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Skill />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
