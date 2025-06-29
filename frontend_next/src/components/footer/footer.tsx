"use client";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";

const Footer = () => {
  const locale = useLocale();

  return (
    <footer className="mt-auto pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Hauptbereich */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-center ">
          
          {/* E-Mail Bereich - Links */}
          <div className="flex justify-center md:justify-start">
            <a
              href="mailto:marioraach01@gmail.com"
              aria-label="Senden Sie Mario Raach eine E-Mail"
              className="group flex items-center gap-2 text-gray-100 hover:text-gray-400 transition-all duration-200"
            >
              {/* Mail Icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 group-hover:scale-110 transition-transform"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-10 5L2 7" />
              </svg>
              <span className="hidden md:inline-block text-sm font-medium">
                marioraach01@gmail.com
              </span>
              <span className="md:hidden text-sm font-medium">
                E-Mail
              </span>
            </a>
          </div>

          {/* Copyright & Links - Mitte */}
          <div className="text-center space-y-2 order-last md:order-none">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Mario Raach. All rights reserved.
            </p>
            <div className="flex gap-4 justify-center text-sm">
              <Link 
                href="/imprint"
                className="text-gray-600 hover:text-gray-400 transition-colors"
              >
                {locale === "de" ? "Impressum" : "Imprint"}
              </Link>
              <span className="text-gray-400">•</span>
              <Link 
                href="/dataprotection"
                className="text-gray-600 hover:text-gray-400 transition-colors"
              >
                {locale === "de" ? "Datenschutz" : "Data Protection"}
              </Link>
            </div>
          </div>

          {/* Social Links - Rechts */}
          <nav className="flex justify-center md:justify-end items-center gap-4">
            {/* GitHub Link */}
            <a
              href="https://github.com/mariorch22"
              aria-label="GitHub von Mario Raach"
              className="group p-2 rounded-full bg-gray-100 hover:bg-gray-900 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/mario-r-b88950238"
              aria-label="LinkedIn von Mario Raach"
              className="group p-2 rounded-full bg-gray-100 hover:bg-[#0077b5] transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;