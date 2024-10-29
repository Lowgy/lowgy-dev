import NavBar from '@/components/nav-bar';
import SocialLinks from '@/components/social-links';

export default function LeftSide() {
  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-200">
          Logan Olson
        </div>
        <div className="font-medium tracking-tight text-slate-200 sm:text-xl text-nowrap mt-4">
          Software Developer - Winnipeg, Manitoba.
        </div>
        <div className="lg:mr-[70px] mt-4 md:mt-8 leading-relaxed">
          <div className="mb-4">
            Always looking to learn and grow. I am passionate about building and
            creating things that help people. I am currently working at Moonlite
            Media
          </div>
          <div>
            Lover of food, video games and anything involving my fantasy teams.
            I also enjoy weightlifting, slo-pitch and speedrunning games.
          </div>
        </div>
        <NavBar />
      </div>
      <SocialLinks />
    </div>
  );
}
