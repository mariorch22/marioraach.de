import Head from "next/head";

const Imprint = () => {
  return (
    <>
      <Head>
        <title>Datenschutz</title>
      </Head>
      <main className="min-h-screen text-white mt-20">
        {/* Container mit optimierten Paddings für Mobile */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="pt-20 pb-12">
            {/* Hauptüberschrift */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 break-words">
              Datenschutz&shy;erkl&auml;rung
            </h1>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                1. Datenschutz auf einen Blick
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    Allgemeine Hinweise
                  </h3>
                  <p className="text-sm sm:text-base text-white leading-relaxed">
                    Die folgenden Hinweise geben einen einfachen &Uuml;berblick
                    dar&uuml;ber, was mit Ihren personenbezogenen Daten
                    passiert, wenn Sie diese Website besuchen. Personenbezogene
                    Daten sind alle Daten, mit denen Sie pers&ouml;nlich
                    identifiziert werden k&ouml;nnen. Ausf&uuml;hrliche
                    Informationen zum Thema Datenschutz entnehmen Sie unserer
                    unter diesem Text aufgef&uuml;hrten
                    Datenschutzerkl&auml;rung.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    Datenerfassung auf dieser Website
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-base sm:text-lg font-medium mb-2">
                        Wer ist verantwortlich f&uuml;r die Datenerfassung auf
                        dieser Website?
                      </h4>
                      <p className="text-sm sm:text-base text-white leading-relaxed">
                        Die Datenverarbeitung auf dieser Website erfolgt durch
                        den Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen
                        Sie dem Abschnitt &bdquo;Hinweis zur Verantwortlichen
                        Stelle&ldquo; in dieser Datenschutzerkl&auml;rung
                        entnehmen.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-medium mb-2">
                        Wie erfassen wir Ihre Daten?
                      </h4>
                      <p className="text-sm sm:text-base text-white leading-relaxed mb-3">
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie
                        uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um
                        Daten handeln, die Sie in ein Kontaktformular eingeben.
                      </p>
                      <p className="text-sm sm:text-base text-white leading-relaxed">
                        Andere Daten werden automatisch oder nach Ihrer
                        Einwilligung beim Besuch der Website durch unsere
                        IT-Systeme erfasst. Das sind vor allem technische Daten
                        (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit
                        des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
                        automatisch, sobald Sie diese Website betreten.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-medium mb-2">
                        Wof&uuml;r nutzen wir Ihre Daten?
                      </h4>
                      <p className="text-sm sm:text-base text-white leading-relaxed">
                        Ein Teil der Daten wird erhoben, um eine fehlerfreie
                        Bereitstellung der Website zu gew&auml;hrleisten. Andere
                        Daten k&ouml;nnen zur Analyse Ihres Nutzerverhaltens
                        verwendet werden. Sofern &uuml;ber die Website
                        Vertr&auml;ge geschlossen oder angebahnt werden
                        k&ouml;nnen, werden die &uuml;bermittelten Daten auch
                        f&uuml;r Vertragsangebote, Bestellungen oder sonstige
                        Auftragsanfragen verarbeitet.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-medium mb-2">
                        Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?
                      </h4>
                      <p className="text-sm sm:text-base text-white leading-relaxed mb-3">
                        Sie haben jederzeit das Recht, unentgeltlich Auskunft
                        &uuml;ber Herkunft, Empf&auml;nger und Zweck Ihrer
                        gespeicherten personenbezogenen Daten zu erhalten. Sie
                        haben au&szlig;erdem ein Recht, die Berichtigung oder
                        L&ouml;schung dieser Daten zu verlangen. Wenn Sie eine
                        Einwilligung zur Datenverarbeitung erteilt haben,
                        k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r
                        die Zukunft widerrufen. Au&szlig;erdem haben Sie das
                        Recht, unter bestimmten Umst&auml;nden die
                        Einschr&auml;nkung der Verarbeitung Ihrer
                        personenbezogenen Daten zu verlangen. Des Weiteren steht
                        Ihnen ein Beschwerderecht bei der zust&auml;ndigen
                        Aufsichtsbeh&ouml;rde zu.
                      </p>
                      <p className="text-sm sm:text-base text-white leading-relaxed">
                        Hierzu sowie zu weiteren Fragen zum Thema Datenschutz
                        k&ouml;nnen Sie sich jederzeit an uns wenden.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 - Hosting */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                2. Hosting
              </h2>
              <p className="text-sm sm:text-base text-white leading-relaxed mb-4">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Amazon Web Services (AWS)
                </h3>
                <div className="space-y-3">
                  <p className="text-sm sm:text-base text-white leading-relaxed">
                    Anbieter ist die Amazon Web Services EMEA SARL, 38 Avenue
                    John F. Kennedy, 1855 Luxemburg (nachfolgend AWS).
                  </p>
                  <p className="text-sm sm:text-base text-white leading-relaxed">
                    Wenn Sie unsere Website besuchen, werden Ihre
                    personenbezogenen Daten auf den Servern von AWS verarbeitet.
                    Hierbei k&ouml;nnen auch personenbezogene Daten an das
                    Mutterunternehmen von AWS in die USA &uuml;bermittelt
                    werden. Die Daten&uuml;bertragung in die USA wird auf die
                    EU-Standardvertragsklauseln gest&uuml;tzt. Details finden
                    Sie hier:{" "}
                    <a
                      href="https://aws.amazon.com/de/blogs/security/aws-gdpr-data-processing-addendum/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline break-all"
                    >
                      https://aws.amazon.com/de/blogs/security/aws-gdpr-data-processing-addendum/
                    </a>
                  </p>
                  <p className="text-sm sm:text-base text-white leading-relaxed">
                    Weitere Informationen entnehmen Sie der
                    Datenschutzerkl&auml;rung von AWS:{" "}
                    <a
                      href="https://aws.amazon.com/de/privacy/?nc1=f_pr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline break-all"
                    >
                      https://aws.amazon.com/de/privacy/?nc1=f_pr
                    </a>
                  </p>
                  <p className="text-sm sm:text-base text-white leading-relaxed">
                    Die Verwendung von AWS erfolgt auf Grundlage von Art. 6 Abs.
                    1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an
                    einer möglichst zuverlässigen Darstellung unserer Website.
                    Sofern eine entsprechende Einwilligung abgefragt wurde,
                    erfolgt die Verarbeitung ausschließlich auf Grundlage von
                    Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die
                    Einwilligung die Speicherung von Cookies oder den Zugriff
                    auf Informationen im Endgerät des Nutzers (z.&nbsp;B.
                    Device-Fingerprinting) im Sinne des TDDDG umfasst. Die
                    Einwilligung ist jederzeit widerrufbar.
                  </p>
                  <p className="text-sm sm:text-base text-white leading-relaxed">
                    Das Unternehmen verfügt über eine Zertifizierung nach dem
                    &ldquo;EU-US Data Privacy Framework&rdquo; (DPF). Der DPF
                    ist ein Übereinkommen zwischen der Europäischen Union und
                    den USA, der die Einhaltung europäischer
                    Datenschutzstandards bei Datenverarbeitungen in den USA
                    gewährleisten soll. Jedes nach dem DPF zertifizierte
                    Unternehmen verpflichtet sich, diese Datenschutzstandards
                    einzuhalten. Weitere Informationen hierzu erhalten Sie vom
                    Anbieter unter folgendem Link:{" "}
                    <a
                      href="https://www.dataprivacyframework.gov/participant/5776"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline break-all"
                    >
                      https://www.dataprivacyframework.gov/participant/5776
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 - Allgemeine Hinweise */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                3. Allgemeine Hinweise und Pflicht&shy;informationen
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    Datenschutz
                  </h3>
                  <div className="space-y-3">
                    <p className="text-sm sm:text-base text-white leading-relaxed">
                      Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                      persönlichen Daten sehr ernst. Wir behandeln Ihre
                      personenbezogenen Daten vertraulich und entsprechend den
                      gesetzlichen Datenschutzvorschriften sowie dieser
                      Datenschutzerklärung.
                    </p>
                    <p className="text-sm sm:text-base text-white leading-relaxed">
                      Wenn Sie diese Website benutzen, werden verschiedene
                      personenbezogene Daten erhoben. Personenbezogene Daten
                      sind Daten, mit denen Sie persönlich identifiziert werden
                      können. Die vorliegende Datenschutzerklärung erläutert,
                      welche Daten wir erheben und wofür wir sie nutzen. Sie
                      erläutert auch, wie und zu welchem Zweck das geschieht.
                    </p>
                    <p className="text-sm sm:text-base text-white leading-relaxed">
                      Wir weisen darauf hin, dass die Datenübertragung im
                      Internet (z.&nbsp;B. bei der Kommunikation per E-Mail)
                      Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
                      der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    Hinweis zur verantwortlichen Stelle
                  </h3>
                  <p className="text-sm sm:text-base text-white leading-relaxed mb-3">
                    Die verantwortliche Stelle für die Datenverarbeitung auf
                    dieser Website ist:
                  </p>
                  <div className="p-4 rounded-lg mb-3">
                    <p className="text-sm sm:text-base text-white">
                      Flachsäcker 14
                      <br />
                      72393 Burladingen
                    </p>
                    <p className="text-sm sm:text-base text-white mt-2">
                      Telefon:{" "}
                      <a
                        href="tel:015209748732"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        015209748732
                      </a>
                      <br />
                      E-Mail:{" "}
                      <a
                        href="mailto:marioraach01@gmail.com"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        marioraach01@gmail.com
                      </a>
                    </p>
                  </div>
                  <p className="text-sm sm:text-base text-white leading-relaxed">
                    Verantwortliche Stelle ist die natürliche oder juristische
                    Person, die allein oder gemeinsam mit anderen über die
                    Zwecke und Mittel der Verarbeitung von personenbezogenen
                    Daten (z.&nbsp;B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                  </p>
                </div>

                {/* Weitere Abschnitte mit gleichem Muster... */}

                {/* Widerspruchsrecht - Hervorgehoben */}
                <div className="p-4 rounded">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    Widerspruchsrecht gegen die Datenerhebung in besonderen
                    Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
                  </h3>
                  <p className="text-sm sm:text-base font-medium ">
                    WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1
                    LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT,
                    AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION
                    ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN
                    DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF
                    DIESE BESTIMMUNGEN GESTÜTZTES PROFILING.
                  </p>
                  {/* Rest des Widerspruchsrechts... */}
                </div>

                {/* Listen-Beispiel für mobile Optimierung */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    Recht auf Einschränkung der Verarbeitung
                  </h3>
                  <p className="text-sm sm:text-base text-white leading-relaxed mb-3">
                    Sie haben das Recht, die Einschränkung der Verarbeitung
                    Ihrer personenbezogenen Daten zu verlangen. Hierzu können
                    Sie sich jederzeit an uns wenden. Das Recht auf
                    Einschränkung der Verarbeitung besteht in folgenden Fällen:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-sm sm:text-base text-white leading-relaxed">
                      Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                      personenbezogenen Daten bestreiten, benötigen wir in der
                      Regel Zeit, um dies zu überprüfen. Für die Dauer der
                      Prüfung haben Sie das Recht, die Einschränkung der
                      Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                    </li>
                    <li className="text-sm sm:text-base text-white leading-relaxed">
                      Wenn die Verarbeitung Ihrer personenbezogenen Daten
                      unrechtmäßig geschah/geschieht, können Sie statt der
                      Löschung die Einschränkung der Datenverarbeitung
                      verlangen.
                    </li>
                    <li className="text-sm sm:text-base text-white leading-relaxed">
                      Wenn wir Ihre personenbezogenen Daten nicht mehr
                      benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder
                      Geltendmachung von Rechtsansprüchen benötigen, haben Sie
                      das Recht, statt der Löschung die Einschränkung der
                      Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                    </li>
                    <li className="text-sm sm:text-base text-white leading-relaxed">
                      Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO
                      eingelegt haben, muss eine Abwägung zwischen Ihren und
                      unseren Interessen vorgenommen werden. Solange noch nicht
                      feststeht, wessen Interessen überwiegen, haben Sie das
                      Recht, die Einschränkung der Verarbeitung Ihrer
                      personenbezogenen Daten zu verlangen.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 - Plugins und Tools */}
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                4. Plugins und Tools
              </h2>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Google Fonts
                </h3>
                <div className="space-y-3">
                  <p className="text-sm sm:text-base text-white leading-relaxed">
                    Diese Seite nutzt zur einheitlichen Darstellung von
                    Schriftarten so genannte Google Fonts, die von Google
                    bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr
                    Browser die benötigten Fonts in ihren Browsercache, um Texte
                    und Schriftarten korrekt anzuzeigen.
                  </p>
                  {/* Rest des Google Fonts Abschnitts... */}
                </div>
              </div>
            </section>

            {/* Quelle */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Die Quelle:{" "}
                <a
                  href="https://www.e-recht24.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  https://www.e-recht24.de
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Imprint;
