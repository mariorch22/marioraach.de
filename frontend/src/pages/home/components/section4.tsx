import React from 'react';
import { motion } from 'framer-motion';
import SlideInFromSide from '@/animations/slideInFromSide';
import Button from '@/components/shared/animatedButton';
import { useTranslation } from 'react-i18next';
import useFormatText from '@/hooks/useFormatText';
import { IoMdArrowDropright } from 'react-icons/io';

interface HomeKontaktText {
  title: string;
  contactText: string;
}

const Section4 = () => {
  const { t } = useTranslation();
  const homeKontaktText: HomeKontaktText = t('homeKontaktText') as unknown as HomeKontaktText;

  const formattedKontaktText = useFormatText(homeKontaktText.contactText);

  return (
    <>
      <div className="md:px-40 xl:px-80 py-6 xl:py-20">
        <h1 className="text-4xl xl:text-5xl pl-8">{homeKontaktText.title}</h1>
        <div className="py-4 px-4 xl:text-xl">{formattedKontaktText}</div>

        <span className="w-full flex justify-end pr-4">
          <SlideInFromSide>
            <motion.span whileHover={{ scale: 1.1 }}>
              <Button content={<IoMdArrowDropright className="w-full h-full" />} link="/contact" />
            </motion.span>
          </SlideInFromSide>
        </span>
      </div>
    </>
  );
};

export default React.memo(Section4);
