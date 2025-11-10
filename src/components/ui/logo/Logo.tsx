import Image from 'next/image';
import { Link } from '@/i18n/navigation';

interface LogoPresentationProps {
  targetLocale: string;
  ariaLabel: string;
  altText: string;
}

/**
 * @component LogoPresentation
 * Responsible for displaying the logo as a link with the passed attributes.
 */
const LogoPresentation = ({ targetLocale, ariaLabel, altText }: LogoPresentationProps) => {
  return (
    <Link href={'/'} locale={targetLocale} aria-label={ariaLabel}>
      <Image
        src="/images/logo_r.png"
        alt={altText}
        className="invert z-40 mix-blend-difference"
        width={40}
        height={40}
      />
    </Link>
  );
};

export default LogoPresentation;
