import React from 'react';
import { Link } from 'react-router-dom';

const STYLES = {
  container: 'flex items-center h-screen p-16 bg-gray-50',
  content: 'container flex flex-col items-center',
  textWrapper: 'flex flex-col gap-6 max-w-md text-center',
  errorCode: 'font-extrabold text-9xl text-gray-600 dark:text-gray-100',
  errorMessage: 'text-2xl md:text-3xl dark:text-gray-300',
  button:
    'px-8 py-4 text-xl font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200 transition-colors duration-300',
} as const;

interface NotFoundProps {
  className?: string;
}

const NotFound: React.FC<NotFoundProps> = ({ className }) => {
  return (
    <>
      <title>404 - Page Not Found</title>
      <meta name="description" content="The page you're looking for doesn't exist." />

      <section className={STYLES.container}>
        <div className={STYLES.content}>
          <div className={STYLES.textWrapper}>
            <h2 className={STYLES.errorCode}>
              <span className="sr-only">Error</span>
              404
            </h2>
            <p className={STYLES.errorMessage}>Sorry, we couldn't find this page.</p>
            <Link to="/" className={STYLES.button} aria-label="Return to homepage">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
