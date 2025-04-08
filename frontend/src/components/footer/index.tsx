import { Link } from 'react-router-dom';
import { CiMail } from 'react-icons/ci';
import { FOOTER_LINKS, CONTACT_EMAIL } from '@/constants/footer';
import { FooterLink } from './components/footerLink';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { i18n } = useTranslation();
  
  return (
    <>
      <footer className="pt-20">
        <div>
          <div className="text-lg grid grid-cols-[1fr_2fr_1fr] flex-row px-4 md:px-20 h-20">
            <div className="flex items-center">
              <a href={`mailto:${CONTACT_EMAIL}`} aria-label="Senden Sie Mario Raach eine E-Mail">
                <p className="hidden md:block font-roboto opacity-80 hover:opacity-100">
                  {CONTACT_EMAIL}
                </p>
                <CiMail className="md:hidden opacity-80" size={25} />
              </a>
            </div>

            <div className="text-gray-30 text-center text-xs md:text-sm opacity-80 text-md flex flex-col justify-center">
              <p>&copy; {new Date().getFullYear()} - All rights reserved</p>
              <div className="flex gap-2 w-full justify-center">
                <Link to={'/imprint'}>{i18n.language === 'de' ? 'Impressum' : "Imprint"}</Link>
                <Link to={'/dataprotection'}>{i18n.language === 'de' ? 'Datenschutz' : "Data Protection"}</Link>
              </div>
            </div>

            <nav className="flex justify-end items-center gap-4">
              {FOOTER_LINKS.map(link => (
                <FooterLink key={link.href} {...link} />
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
