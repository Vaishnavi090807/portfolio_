import VideoIntro from '../components/VideoIntro/VideoIntro';
import Nav from '../components/Sections/Nav';
import PortfolioSections from '../components/Sections/PortfolioSections';

export default function Home() {
  return (
    <main>
      <VideoIntro
        src="/video/intro.mp4"
        firstName="Vaishnavi"
        lastName="Sabbella"
        tagline="Software developer, open to internships"
        role="Computer Science undergraduate at Amrita Vishwa Vidyapeetham"
        description="I build backend systems, algorithms and local AI tools in Python, Java and C++."
        nextSectionId="about"
      />
      <Nav />
      <PortfolioSections />
    </main>
  );
}
