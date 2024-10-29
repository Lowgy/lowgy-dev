import Footer from '@/components/footer';
import Experiences from '@/components/experiences';

export default function RightSide() {
  return (
    <div className="pt-24 lg:w-1/2">
      <section id="experience" className="section mb-6 scroll-mt-24 md:mb-24">
        <Experiences />
      </section>
      <section id="projects" className="section mb-6 scroll-mt-24 md:mb-24">
        {/* <Projects /> */}
      </section>
      <Footer />
    </div>
  );
}
