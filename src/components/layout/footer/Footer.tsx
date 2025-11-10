'use client';
import Divider from '@/components/ui/divider/Divider';
import { Link } from '@/i18n/navigation';
import { Suspense } from 'react';

interface FooterProps {
  copyrightHolder: string;
  currentYear: number;
  imprintLabel: string;
  dataProtectionLabel: string;
}

function Footer({ copyrightHolder, currentYear, imprintLabel, dataProtectionLabel }: FooterProps) {
  return (
    <footer className="mt-16 md:mt-24">
      <Divider />
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-alpha-400">
            &copy; {currentYear} {copyrightHolder}
          </p>

          {/* Footer Nav */}
          <nav aria-label="Footer">
            <ul className="flex items-center gap-6 text-sm">
              <Suspense fallback={<div>Loading...</div>}>
                <li>
                  <Link
                    href="/imprint"
                    className="text-gray-alpha-400 hover:text-gray-alpha-200 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded-sm"
                  >
                    {imprintLabel}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dataprotection"
                    className="text-gray-alpha-400 hover:text-gray-alpha-200 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded-sm"
                  >
                    {dataProtectionLabel}
                  </Link>
                </li>
              </Suspense>
            </ul>
          </nav>

          {/* Socials */}
          <ul className="flex items-center gap-4">
            <li>
              <a
                href="mailto:marioraach01@gmail.com"
                aria-label="Email Mario Raach"
                className="inline-flex items-center text-gray-alpha-400 hover:text-gray-alpha-200 opacity-80 hover:opacity-100 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded-sm"
              >
                <span className="sr-only">Email</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                  focusable="false"
                >
                  <rect x="3" y="5.25" width="18" height="13.5" rx="2.25" ry="2.25" />
                  <path d="M4.5 7.25 12 12.5l7.5-5.25" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="/all.xml"
                aria-label="RSS Feed"
                className="inline-flex items-center text-gray-alpha-400 hover:text-gray-alpha-200 opacity-80 hover:opacity-100 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded-sm"
              >
                <span className="sr-only">RSS</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M6 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                  <path d="M2 6a16 16 0 0 1 16 16h-4A12 12 0 0 0 2 10V6Z" />
                  <path d="M2 11a11 11 0 0 1 11 11H9A7 7 0 0 0 2 15v-4Z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mariorch22"
                aria-label="GitHub"
                className="inline-flex items-center text-gray-alpha-400 hover:text-gray-alpha-200 opacity-80 hover:opacity-100 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded-sm"
                target="_blank"
                rel="noopener noreferrer me"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M12 .5C5.648.5.5 5.648.5 12A11.5 11.5 0 0 0 8.365 23.2c.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.4.74-4.12-1.64-4.12-1.64-.55-1.4-1.34-1.78-1.34-1.78-1.1-.75.08-.74.08-.74 1.23.09 1.88 1.26 1.88 1.26 1.08 1.86 2.84 1.33 3.53 1.02.11-.78.43-1.31.77-1.62-2.7-.31-5.54-1.35-5.54-6.02 0-1.32.48-2.41 1.26-3.26-.12-.31-.54-1.55.12-3.23 0 0 1.02-.33 3.34 1.24.97-.27 2-.4 3.03-.4s2.06.13 3.03.4c2.32-1.57 3.34-1.24 3.34-1.24.66 1.68.24 2.92.12 3.23.78.85 1.26 1.94 1.26 3.26 0 4.69-2.85 5.7-5.57 6 .44.38.83 1.13.83 2.28 0 1.64-.02 2.95-.02 3.35 0 .32.22.7.83.58A11.5 11.5 0 0 0 23.5 12C23.5 5.648 18.352.5 12 .5Z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mario-r-b88950238"
                aria-label="LinkedIn"
                className="inline-flex items-center text-gray-alpha-400 hover:text-gray-alpha-200 opacity-80 hover:opacity-100 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded-sm"
                target="_blank"
                rel="noopener noreferrer me"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23.5h-4V8zM8 8h3.8v2.1h.05c.53-1 1.82-2.1 3.75-2.1 4 0 4.75 2.6 4.75 6V23.5h-4V15.7c0-1.86-.03-4.25-2.6-4.25-2.6 0-3 2.03-3 4.12V23.5H8V8z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
