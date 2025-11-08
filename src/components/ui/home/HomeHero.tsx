interface HomeHeroProps {
  title: string;
  subline: string;
}

const HomeHero = ({ title, subline }: HomeHeroProps) => (
  <section className="mx-auto max-w-3xl px-0 pt-4 pb-4">
    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">{title}</h1>
    <p className="mt-3 text-gray-alpha-600 whitespace-pre-line">{subline}</p>
  </section>
);

export default HomeHero;
