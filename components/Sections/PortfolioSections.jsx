import s from './Sections.module.css';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Credentials from './Credentials';
import Contact from './Contact';

export default function PortfolioSections() {
  return (
    <div className={s.stack}>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Credentials />
      <Contact />
    </div>
  );
}
