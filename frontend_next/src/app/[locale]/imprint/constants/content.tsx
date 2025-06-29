export const IMPRINT_CONTENT = {
  title: 'Impressum',
  legalReference: 'Angaben gemäß § 5 TMG',
  operator: {
    title: 'Name des Website-Betreibers:',
    name: 'Mario Raach',
  },
  address: {
    title: 'Anschrift:',
    street: 'Flachsäcker 14',
    city: '72393 Burladingen',
  },
  contact: {
    title: 'Kontakt:',
    phone: 'Telefon: +49 1520 9748732',
    email: 'E-Mail: marioraach01@gmail.com',
  },
  responsible: {
    title: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:',
    name: 'Mario Raach',
    street: 'Flachsäcker 14',
    city: '72393 Burladingen',
  },
  disclaimer: {
    title: 'Haftungsausschluss (Disclaimer):',
    sections: [
      {
        title: '1. Haftung für Inhalte',
        content: `Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.`,
      },
      {
        title: '2. Haftung für Links',
        content:
          'Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
      },
      {
        title: '3. Urheberrecht',
        content:
          'Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.',
      },
    ],
  },
} as const;
