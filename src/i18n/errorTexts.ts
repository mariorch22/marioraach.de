
export const getErrorTexts = (locale: string, type: 'blog' | 'essay' | 'general') => {
    const texts = {
      blog: {
        de: {
          title: 'Fehler beim Laden des Blogposts',
          retry: 'Erneut versuchen',
          backHome: 'Zur Startseite',
        },
        en: {
          title: 'Error loading blog post',
          retry: 'Try again',
          backHome: 'Back to home',
        },
      },
      essay: {
        de: {
          title: 'Fehler beim Laden des Essays',
          retry: 'Erneut versuchen',
          backHome: 'Zur Startseite',
        },
        en: {
          title: 'Error loading essay',
          retry: 'Try again',
          backHome: 'Back to home',
        },
      },
      general: {
        de: {
          title: 'Ein Fehler ist aufgetreten',
          retry: 'Erneut versuchen',
          backHome: 'Zur Startseite',
        },
        en: {
          title: 'An error occurred',
          retry: 'Try again',
          backHome: 'Back to home',
        },
      },
    };
  
    return texts[type][locale as 'de' | 'en'] || texts[type].en;
  };