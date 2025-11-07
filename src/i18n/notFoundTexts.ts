export const getNotFoundTexts = (locale: string, type: 'essay' | 'blog' | 'page') => {
    const texts = {
      essay: {
        de: {
          title: 'Essay nicht gefunden',
          backToHome: 'Zur Startseite',
        },
        en: {
          title: 'Essay not found',
          backToHome: 'Back to home',
        },
      },
      blog: {
        de: {
          title: 'Blog-Post nicht gefunden',
          backToHome: 'Zur Startseite',
        },
        en: {
          title: 'Blog post not found',
          backToHome: 'Back to home',
        },
      },
      page: {
        de: {
          title: 'Seite nicht gefunden',
          backToHome: 'Zur Startseite',
        },
        en: {
          title: 'Page not found',
          backToHome: 'Back to home',
        },
      },
    };
  
    return texts[type][locale as 'de' | 'en'] || texts[type].en;
  };