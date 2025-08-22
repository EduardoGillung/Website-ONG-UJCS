import Intro from '../sections/intro';
import About from '../sections/about';
import Contact from '../sections/contact';
import Projects from '../sections/projects';

const Home = () => {
  return (
    <div className="w-full scroll-smooth snap-y snap-mandatory">
      <section className="min-h-screen bg-transparent snap-start">
        <Intro />
      </section>
      <div className="w-full h-8 bg-transparent" />
      <section className="min-h-screen bg-transparent snap-start">
        <Projects/>
      </section>
      <div className="w-full h-8 bg-transparent" />
      <section className="min-h-screen bg-transparent snap-start">
        <About />
      </section>
      <div className="w-full h-8 bg-transparent" />
      <section className="min-h-screen bg-transparent snap-start">
        <Contact />
      </section>
      <div className="w-full h-8 bg-transparent" />
      <section className="min-h-screen bg-transparent snap-start">
      </section>
    </div>
  );
};

export default Home;
