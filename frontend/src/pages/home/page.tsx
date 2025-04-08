import Divider from '@/components/general/divider';
import BlogSection from './components/blogSection';
import InfoSection from './components/infoSection';

const Home = () => {

  return (
    <>
      <title>Home</title>
      <meta name="description" content="Just a guy having fun :D" />
      <meta
        name="keywords"
        content="Mario Raach, Industriekaufmann, Webentwickler, Technologie, Entrepreneurship, Sport, Künstliche Intelligenz, Webentwicklung, Startups, Projektideen"
      />

      <main className="overflow-hidden flex flex-col justify-center items-center gap-12 font-inter text-normal mt-40 px-4">
        <InfoSection />
        <Divider />
        <BlogSection />
      </main>
    </>
  );
};

export default Home;
