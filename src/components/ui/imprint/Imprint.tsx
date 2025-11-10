import { ImprintData } from '@/types/imprint';
import Section from '@/components/ui/imprint/Section';
import ContactCard from '@/components/ui/imprint/ContactCard';

const STYLES = {
  container: 'min-h-screen mt-20',
  contentWrapper: 'container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl',
  content: 'pt-20 pb-12',
  title: 'text-2xl sm:text-3xl lg:text-4xl font-bold mb-2',
  subtitle: 'text-sm sm:text-base text-white mb-8',
  sections: 'mt-8 space-y-6',
  sectionTitle: 'text-xl sm:text-2xl font-semibold mb-4 text-white',
} as const;

interface ImprintPresentationProps {
  data: ImprintData;
}

const ImprintPresentation = ({ data }: ImprintPresentationProps) => {
  return (
    <main className={STYLES.container}>
      <div className={STYLES.contentWrapper}>
        <div className={STYLES.content}>
          <header className="mb-8">
            <h1 className={STYLES.title}>{data.title}</h1>
            <p className={STYLES.subtitle}>{data.legalReference}</p>
          </header>

          <div className="rounded-lg p-4 sm:p-6 mb-8 space-y-4">
            <ContactCard title={data.operator.title} content={data.operator.name} />
            <ContactCard
              title={data.address.title}
              content={
                <>
                  {data.address.street}
                  <br />
                  {data.address.city}
                </>
              }
            />
            <ContactCard
              title={data.contact.title}
              content={
                <a
                  href={`mailto:${data.contact.email}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors break-all"
                >
                  {data.contact.email}
                </a>
              }
            />
            <ContactCard
              title={data.responsible.title}
              content={
                <>
                  {data.responsible.name}
                  <br />
                  {data.responsible.street}
                  <br />
                  {data.responsible.city}
                </>
              }
              isLast
            />
          </div>

          <section className={STYLES.sections}>
            <h2 className={STYLES.sectionTitle}>{data.disclaimer.title}</h2>
            <div className="space-y-6">
              {data.disclaimer.sections.map((section, index) => (
                <Section
                  key={index}
                  title={section.title}
                  content={section.content}
                  className="border-l-4 border-gray-alpha-200 pl-4 hover:border-gray-alpha-400 transition-colors"
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ImprintPresentation;
