"use client";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { Divider } from "@/components/common/Divider";

const Footer = () => {
  const locale = useLocale();

  return (
    <footer className="mt-6">
      <Divider />
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Mario Raach
            </p>
          </div>

          <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <ul className="flex gap-6 text-sm">
              <li>
                <Link
                  href="/imprint"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  {locale === "de" ? "Impressum" : "Imprint"}
                </Link>
              </li>
              <li>
                <Link
                  href="/dataprotection"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  {locale === "de" ? "Datenschutz" : "Data Protection"}
                </Link>
              </li>
            </ul>

            <ul className="flex gap-4">
              <li>
                <a
                  href="mailto:marioraach01@gmail.com"
                  aria-label="Email Mario Raach"
                  className="text-gray-400 hover:text-gray-300 transition-colors text-sm"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mariorch22"
                  aria-label="GitHub"
                  className="text-gray-400 hover:text-gray-300 transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mario-r-b88950238"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-gray-300 transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
