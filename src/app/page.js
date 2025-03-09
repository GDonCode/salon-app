import Header from './components/Header.js';
import HeroText from './components/HeroText.js';
import AboutText from './components/About.js';
import Gallery from './components/Gallery.js';
import Reviews from './components/Reviews.js';
import Footer from './components/Footer.js';

export default function Home() {
  return (
    <>
      <div className="h-screen bg-[url('/media/hero.jpg')] bg-cover bg-center h-[100vh] relative">
        <Header className="z-10"/>
        <HeroText className="z-10"/>
      </div>
      <section id="about">
        <AboutText />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}
