import React from "react";
import { IMPRINT_CONTENT } from "./constants/content";

interface SectionProps {
  title: string;
  content: string | React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, content, className }) => (
  <div className={`mb-6 ${className || ""}`}>
    <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">
      {title}
    </h3>
    <div className="text-sm sm:text-base text-white leading-relaxed">
      {content}
    </div>
  </div>
);

const STYLES = {
  // Main container mit besseren Mobile-Paddings
  container: "min-h-screen mt-20",
  // Content wrapper mit responsive Paddings und max-width
  contentWrapper: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl",
  // Inner content mit top padding für Navigation
  content: "pt-20 pb-12",
  // Title Styles - responsive Größen
  title: "text-2xl sm:text-3xl lg:text-4xl font-bold mb-2",
  // Subtitle
  subtitle: "text-sm sm:text-base text-white mb-8",
  // Sections container
  sections: "mt-8 space-y-6",
  // Section title
  sectionTitle: "text-xl sm:text-2xl font-semibold mb-4 text-white",
} as const;

const Imprint: React.FC = () => {
  return (
    <main className={STYLES.container}>
      <div className={STYLES.contentWrapper}>
        <div className={STYLES.content}>
          {/* Header */}
          <header className="mb-8">
            <h1 className={STYLES.title}>{IMPRINT_CONTENT.title}</h1>
            <p className={STYLES.subtitle}>{IMPRINT_CONTENT.legalReference}</p>
          </header>

          {/* Contact Information Card */}
          <div className="rounded-lg p-4 sm:p-6 mb-8 space-y-4">
            {/* Operator */}
            <div className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
              <h4 className="text-sm font-semibold text-white mb-1">
                {IMPRINT_CONTENT.operator.title}
              </h4>
              <p className="text-base sm:text-lg text-white">
                {IMPRINT_CONTENT.operator.name}
              </p>
            </div>

            {/* Address */}
            <div className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
              <h4 className="text-sm font-semibold text-white mb-1">
                {IMPRINT_CONTENT.address.title}
              </h4>
              <p className="text-base sm:text-lg text-white">
                {IMPRINT_CONTENT.address.street}
                <br />
                {IMPRINT_CONTENT.address.city}
              </p>
            </div>

            {/* Contact */}
            <div className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
              <h4 className="text-sm font-semibold text-white mb-1">
                {IMPRINT_CONTENT.contact.title}
              </h4>
              <p className="text-base sm:text-lg text-white">
                <a
                  href={`tel:${IMPRINT_CONTENT.contact.phone.replace(
                    /\s/g,
                    ""
                  )}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {IMPRINT_CONTENT.contact.phone}
                </a>
                <br />
                <a
                  href={`mailto:${IMPRINT_CONTENT.contact.email}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors break-all"
                >
                  {IMPRINT_CONTENT.contact.email}
                </a>
              </p>
            </div>

            {/* Responsible Person */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-1">
                {IMPRINT_CONTENT.responsible.title}
              </h4>
              <p className="text-base sm:text-lg text-white">
                {IMPRINT_CONTENT.responsible.name}
                <br />
                {IMPRINT_CONTENT.responsible.street}
                <br />
                {IMPRINT_CONTENT.responsible.city}
              </p>
            </div>
          </div>

          {/* Disclaimer Section */}
          <section className={STYLES.sections}>
            <h2 className={STYLES.sectionTitle}>
              {IMPRINT_CONTENT.disclaimer.title}
            </h2>

            <div className="space-y-6">
              {IMPRINT_CONTENT.disclaimer.sections.map((section, index) => (
                <Section
                  key={index}
                  title={section.title}
                  content={section.content}
                  className="border-l-4 border-gray-200 pl-4 hover:border-gray-400 transition-colors"
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Imprint;
