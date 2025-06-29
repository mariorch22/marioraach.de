import {setRequestLocale} from 'next-intl/server';
import { Divider } from '@/components/divider';
import InfoSection from './(home)/components/infoSection';
import BlogSection from './(home)/components/blogSection';
import Head from 'next/head';

export default async function Home({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Just a guy having fun :D" />
        <meta name="keywords" content="Mario Raach, Industriekaufmann, Webentwickler, Technologie, Entrepreneurship, Sport, Künstliche Intelligenz, Webentwicklung, Startups, Projektideen" />
      </Head>

      <main className="overflow-hidden flex flex-col justify-center items-center gap-12 font-inter text-normal mt-40 px-4">
        <InfoSection params={params} className="animate-fade-in-up" />
        <Divider />
        <BlogSection params={params} className="animate-fade-in-up" />
      </main>
    </>
  );
}