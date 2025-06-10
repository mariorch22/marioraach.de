import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import FadeInWhenVisible from '@/animations/fadeInWhenVisible';
import useFormatText from '@/hooks/useFormatText';

interface HomeAboutText {
  aboutTitle: string;
  aboutText: string;
}

export const InfoSection = React.memo(() => {
  const { t } = useTranslation();
  const homeAboutText: HomeAboutText = t('homeAboutText') as unknown as HomeAboutText;

  // Memoize the formatted text to prevent unnecessary re-computation
  const formattedAboutText = useMemo(() => 
    useFormatText(homeAboutText.aboutText), 
    [homeAboutText.aboutText]
  );

  return (
    <FadeInWhenVisible>
      <section 
        className="w-full max-w-4xl mx-auto px-6" 
        aria-labelledby="about-heading"
      >
        <div className="space-y-6">
          <header>
            <h1 
              id="about-heading"
              className="text-2xl sm:text-3xl xl:text-4xl font-bold font-inter text-center sm:text-left
                         bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent
                         leading-tight tracking-tight hover:from-gray-100 hover:to-white
                         transition-all duration-300 cursor-default"
            >
              {homeAboutText.aboutTitle}
            </h1>
          </header>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="text-gray-100 leading-relaxed text-base sm:text-lg font-roboto 
                           space-y-4 [&>span>p]:leading-8 [&>span>p]:text-gray-200
                           [&>span>p]:transition-colors [&>span>p]:duration-200
                           hover:[&>span>p]:text-gray-100">
              {formattedAboutText}
            </div>
          </div>
        </div>
      </section>
    </FadeInWhenVisible>
  );
});

InfoSection.displayName = 'InfoSection';

export default InfoSection;
