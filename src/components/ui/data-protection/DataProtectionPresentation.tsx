interface DataProtectionPresentationProps {
  t: any;
  locale: string;
}

const DataProtectionPresentation = ({ t, locale }: DataProtectionPresentationProps) => {
  return (
    <main className="min-h-screen text-white mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="pt-20 pb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 break-words">{t('h1')}</h1>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">{t('overview.title')}</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {t('overview.generalNotes.title')}
                </h3>
                {t.raw('overview.generalNotes.paragraphs').map((p: string, idx: number) => (
                  <p key={idx} className="text-sm sm:text-base text-white leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {t('overview.dataCollection.title')}
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-base sm:text-lg font-medium mb-2">
                      {t('overview.dataCollection.responsible.title')}
                    </h4>
                    <p className="text-sm sm:text-base text-white leading-relaxed">
                      {t('overview.dataCollection.responsible.text')}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-medium mb-2">
                      {t('overview.dataCollection.how.title')}
                    </h4>
                    <p className="text-sm sm:text-base text-white leading-relaxed mb-3">
                      {t('overview.dataCollection.how.p1')}
                    </p>
                    <p className="text-sm sm:text-base text-white leading-relaxed">
                      {t('overview.dataCollection.how.p2')}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-medium mb-2">
                      {t('overview.dataCollection.purpose.title')}
                    </h4>
                    <p className="text-sm sm:text-base text-white leading-relaxed">
                      {t('overview.dataCollection.purpose.text')}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-medium mb-2">
                      {t('overview.dataCollection.rights.title')}
                    </h4>
                    <p className="text-sm sm:text-base text-white leading-relaxed mb-3">
                      {t('overview.dataCollection.rights.p1')}
                    </p>
                    <p className="text-sm sm:text-base text-white leading-relaxed">
                      {t('overview.dataCollection.rights.p2')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 - Hosting */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">{t('hosting.title')}</h2>
            <p className="text-sm sm:text-base text-white leading-relaxed mb-4">
              {t('hosting.intro')}
            </p>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {t('hosting.provider.name')}
              </h3>
              <div className="space-y-3">
                <p className="text-sm sm:text-base text-white leading-relaxed">
                  {t('hosting.provider.p1')}
                </p>
                <p className="text-sm sm:text-base text-white leading-relaxed">
                  {t('hosting.provider.p2')}{' '}
                  <a
                    href={
                      locale === 'de'
                        ? 'https://aws.amazon.com/de/blogs/security/aws-gdpr-data-processing-addendum/'
                        : 'https://aws.amazon.com/blogs/security/aws-gdpr-data-processing-addendum/'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline break-all"
                  >
                    {locale === 'de'
                      ? 'https://aws.amazon.com/de/blogs/security/aws-gdpr-data-processing-addendum/'
                      : 'https://aws.amazon.com/blogs/security/aws-gdpr-data-processing-addendum/'}
                  </a>
                </p>
                <p className="text-sm sm:text-base text-white leading-relaxed">
                  {t('hosting.provider.p3')}{' '}
                  <a
                    href={
                      locale === 'de'
                        ? 'https://aws.amazon.com/de/privacy/?nc1=f_pr'
                        : 'https://aws.amazon.com/privacy/?nc1=f_pr'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline break-all"
                  >
                    {locale === 'de'
                      ? 'https://aws.amazon.com/de/privacy/?nc1=f_pr'
                      : 'https://aws.amazon.com/privacy/?nc1=f_pr'}
                  </a>
                </p>
                <p className="text-sm sm:text-base text-white leading-relaxed">
                  {t('hosting.provider.p4')}
                </p>
                <p className="text-sm sm:text-base text-white leading-relaxed">
                  {t('hosting.provider.p5')}{' '}
                  <a
                    href="https://www.dataprivacyframework.gov/participant/5776"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline break-all"
                  >
                    https://www.dataprivacyframework.gov/participant/5776
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 - General */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">{t('general.title')}</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {t('general.privacy.title')}
                </h3>
                <div className="space-y-3">
                  {t.raw('general.privacy.paragraphs').map((p: string, idx: number) => (
                    <p key={idx} className="text-sm sm:text-base text-white leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {t('general.controller.title')}
                </h3>
                <p className="text-sm sm:text-base text-white leading-relaxed mb-3">
                  {t('general.controller.intro')}
                </p>
                <div className="p-4 rounded-lg mb-3">
                  <p className="text-sm sm:text-base text-white">
                    {t.raw('general.controller.addressLines')[0]}
                    <br />
                    {t.raw('general.controller.addressLines')[1]}
                  </p>
                  <p className="text-sm sm:text-base text-white mt-2">
                    {t('general.controller.emailLabel')}{' '}
                    <a
                      href={`mailto:${t('general.controller.email')}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {t('general.controller.email')}
                    </a>
                  </p>
                </div>
                <p className="text-sm sm:text-base text-white leading-relaxed">
                  {t('general.controller.note')}
                </p>
              </div>

              <div className="p-4 rounded">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {t('general.objection.title')}
                </h3>
                <p className="text-sm sm:text-base font-medium ">
                  {t('general.objection.emphasis')}
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {t('general.restriction.title')}
                </h3>
                <p className="text-sm sm:text-base text-white leading-relaxed mb-3">
                  {t('general.restriction.intro')}
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  {t.raw('general.restriction.bullets').map((b: string, idx: number) => (
                    <li key={idx} className="text-sm sm:text-base text-white leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 - Plugins and Tools */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">{t('plugins.title')}</h2>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {t('plugins.localFonts.title')}
              </h3>
              <div className="space-y-3">
                {t.raw('plugins.localFonts.paragraphs').map((p: string, idx: number) => (
                  <p key={idx} className="text-sm sm:text-base text-white leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Source */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              {t('source.label')}{' '}
              <a
                href="https://www.e-recht24.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                {t('source.urlText')}
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DataProtectionPresentation;
