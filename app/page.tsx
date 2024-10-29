import LeftSide from '@/components/left-side';
import RightSide from '@/components/right-side';

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:gap-4 z-0">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}
