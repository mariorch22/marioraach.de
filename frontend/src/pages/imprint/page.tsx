import React from 'react';
import { IMPRINT_CONTENT } from '@/pages/imprint/constants/content';

interface SectionProps {
  title: string;
  content: string | React.ReactNode;
  className?: string;
}

interface ContentBlockProps {
  title: string;
  children: React.ReactNode;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ title, children }) => (
  <p>
    <h4 className="text-lg font-semibold py-2">{title}</h4>
    {children}
    <br />
    <br />
  </p>
);

const Section: React.FC<SectionProps> = ({ title, content, className }) => (
  <span className={className}>
    <h3 className="py-2 font-semibold">{title}</h3>
    <p className="pl-6">{content}</p>
  </span>
);

const STYLES = {
  container: 'flex items-center lg:p-16',
  content: 'container flex flex-col items-center pt-20',
  text: '',
  title: 'text-3xl py-12',
  subtitle: 'pb-4 text-sm',
  sections: 'flex flex-col gap-4 pt-12',
  sectionTitle: 'text-lg font-semibold',
} as const;

const Imprint: React.FC = () => {
  return (
    <>
      <main className={STYLES.container}>
        <div className={STYLES.content}>
          <div className={STYLES.text}>
            <h1 className={STYLES.title}>{IMPRINT_CONTENT.title}</h1>
            <p className={STYLES.subtitle}>{IMPRINT_CONTENT.legalReference}</p>

            <ContentBlock title={IMPRINT_CONTENT.operator.title}>
              {IMPRINT_CONTENT.operator.name}
            </ContentBlock>

            <ContentBlock title={IMPRINT_CONTENT.address.title}>
              {IMPRINT_CONTENT.address.street}
              <br />
              {IMPRINT_CONTENT.address.city}
            </ContentBlock>

            <ContentBlock title={IMPRINT_CONTENT.contact.title}>
              {IMPRINT_CONTENT.contact.phone}
              <br />
              {IMPRINT_CONTENT.contact.email}
            </ContentBlock>

            <ContentBlock title={IMPRINT_CONTENT.responsible.title}>
              {IMPRINT_CONTENT.responsible.name}
              <br />
              {IMPRINT_CONTENT.responsible.street}
              <br />
              {IMPRINT_CONTENT.responsible.city}
            </ContentBlock>

            <section className={STYLES.sections}>
              <h2 className={STYLES.sectionTitle}>{IMPRINT_CONTENT.disclaimer.title}</h2>

              {IMPRINT_CONTENT.disclaimer.sections.map((section, index) => (
                <Section key={index} title={section.title} content={section.content} />
              ))}
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Imprint;
