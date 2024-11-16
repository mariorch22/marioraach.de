import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";

const Imprint = () => {
    return(
        <>
            <Navbar />
            <main className="flex items-center lg:p-16 bg-backgroundGray">
                <div className="container flex flex-col items-center pt-20">
                    <div className="text-white">
                        <h1 className="text-3xl py-12">Impressum</h1>
                        <p className="pb-4 text-sm">
                            Angaben gemäß § 5 TMG
                        </p>
                        <p>
                            <h4 className="text-lg font-semibold py-2">Name des Website-Betreibers:</h4>
                            Mario Raach<br/><br/>                            
                        </p>
                        <p>
                            <h4 className="text-lg font-semibold py-2">Anschrift:</h4>
                            Flachsäcker 14<br/>
                            72393 Burladingen<br/><br/>                            
                        </p>
                        <p>
                            <h4 className="text-lg font-semibold py-2">Kontakt:</h4>
                            Telefon: +49 1520 9748732<br/>
                            E-Mail: marioraach01@gmail.com<br/><br/>                            
                        </p>
                        <p>
                            <h4 className="text-lg font-semibold py-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h4>
                            Mario Raach<br/>
                            Flachsäcker 14<br/>
                            72393 Burladingen<br/><br/>                            
                        </p>
                        <section className="flex flex-col gap-4 pt-12">
                            <h2 className="text-lg font-semibold">Haftungsausschluss (Disclaimer):</h2>
                            <span>
                                <h3 className="py-2 font-semibold">1. Haftung für Inhalte</h3>
                                <p className="pl-6">
                                    Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
                                </p>
                            </span>
                            <span>
                                <h3 className="py-2 font-semibold">2. Haftung für Links</h3>
                                <p className="pl-6">
                                    Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                                </p>
                            </span>
                            <span>
                                <h3 className="py-2 font-semibold">3. Urheberrecht</h3>
                                <p className="pl-6">
                                    Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                                </p>                            
                            </span>                        
                        </section>

                    </div>
                </div>
            </main>
        </>
    )
}

export default Imprint