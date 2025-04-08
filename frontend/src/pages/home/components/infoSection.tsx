import React from 'react';
import { useTranslation } from 'react-i18next';
import useFormatText from '@/hooks/useFormatText';

interface HomeAboutText {
  aboutTitle: string;
  aboutText: string;
}

export function InfoSection() {
  const { t } = useTranslation();
  const homeAboutText: HomeAboutText = t('homeAboutText') as unknown as HomeAboutText;

  const formattedAboutText = useFormatText(homeAboutText.aboutText);

  return (
    <>
      <div className="w-full max-w-[60rem] px-6 font-roboto">
        <h1 className="text-xl xl:text-2xl font-inter">
          {homeAboutText.aboutTitle}
        </h1>
        <div className="text-white mt-6">
          {formattedAboutText}
        </div>
      </div>
    </>
  );
}

export default InfoSection;
