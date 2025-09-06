import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Termini di Servizio - FontInsta.org | Condizioni d'Uso",
  description:
    "Leggi i termini di servizio di FontInsta.org per comprendere le condizioni d'uso del nostro generatore di font per Instagram gratuito.",
  openGraph: {
    title: "Termini di Servizio - FontInsta.org",
    description: "Condizioni d'uso di FontInsta.org",
    url: "https://fontinsta.org/termini",
  },
}

export default function Termini() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-amber-50/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Torna alla Home
        </Link>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Termini di Servizio</h1>

          <div className="bg-card rounded-lg p-8 shadow-sm border mb-8">
            <p className="text-sm text-muted-foreground mb-4">
              <strong>Ultimo aggiornamento:</strong> 4 settembre 2025
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Benvenuto su FontInsta.org. Questi Termini di Servizio ("Termini") disciplinano l'uso del nostro sito web
              e dei servizi offerti. Utilizzando FontInsta.org, accetti di essere vincolato da questi Termini.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm border mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Accettazione dei Termini</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Accedendo e utilizzando FontInsta.org, confermi di aver letto, compreso e accettato questi Termini di
              Servizio e la nostra Informativa sulla Privacy. Se non accetti questi termini, ti preghiamo di non
              utilizzare il nostro servizio.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Questi Termini si applicano a tutti i visitatori, utenti e altri che accedono o utilizzano il servizio.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm border mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Descrizione del Servizio</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              FontInsta.org è un generatore gratuito di font speciali per Instagram e altri social media. Il servizio
              include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Trasformazione di testo normale in font speciali e caratteri Unicode</li>
              <li>Anteprima del testo in contesti Instagram simulati</li>
              <li>Funzionalità di copia e incolla per un uso immediato</li>
              <li>Categorizzazione e ricerca dei font disponibili</li>
              <li>Sistema di preferiti per salvare i font preferiti localmente</li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm border mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Uso Accettabile</h2>

            <h3 className="text-lg font-semibold text-foreground mb-3">3.1 Usi Consentiti</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Uso personale e commerciale dei font generati</li>
              <li>Condivisione dei font su social media e piattaforme online</li>
              <li>Utilizzo per scopi creativi, educativi e professionali</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mb-3">3.2 Usi Vietati</h3>
            <p className="text-muted-foreground mb-2">Ti impegni a NON utilizzare FontInsta.org per:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Attività illegali, fraudolente o dannose</li>
              <li>Creare contenuti offensivi, diffamatori o che violano i diritti altrui</li>
              <li>Spam, phishing o altre forme di comunicazione indesiderata</li>
              <li>Tentare di compromettere la sicurezza del sito o dei suoi utenti</li>
              <li>Violare i termini di servizio di Instagram o altre piattaforme</li>
              <li>Utilizzare bot, script o altri mezzi automatizzati per accedere al servizio</li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm border mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Proprietà Intellettuale</h2>

            <h3 className="text-lg font-semibold text-foreground mb-3">4.1 Nostri Diritti</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              FontInsta.org, il suo design, codice, algoritmi e contenuti sono protetti da copyright e altri diritti di
              proprietà intellettuale. Tutti i diritti non espressamente concessi sono riservati.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-3">4.2 I Tuoi Diritti</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I font generati utilizzando FontInsta.org sono basati su caratteri Unicode standard e possono essere
              utilizzati liberamente. Mantieni tutti i diritti sul contenuto testuale che inserisci nel generatore.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-3">4.3 Licenza d'Uso</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ti concediamo una licenza limitata, non esclusiva e revocabile per utilizzare FontInsta.org per scopi
              personali e commerciali, in conformità con questi Termini.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm border mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Disponibilità del Servizio</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ci impegniamo a mantenere FontInsta.org disponibile 24/7, tuttavia:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Il servizio è fornito "così com'è" senza garanzie di disponibilità continua</li>
              <li>Potremmo interrompere temporaneamente il servizio per manutenzione o aggiornamenti</li>
              <li>Non siamo responsabili per interruzioni dovute a fattori esterni al nostro controllo</li>
              <li>Ci riserviamo il diritto di modificare o interrompere il servizio con preavviso</li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm border mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitazione di Responsabilità</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>FontInsta.org è fornito gratuitamente e "così com'è".</strong> Nella misura massima consentita
              dalla legge:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                Non forniamo garanzie esplicite o implicite sulla qualità, accuratezza o affidabilità del servizio
              </li>
              <li>Non siamo responsabili per danni diretti, indiretti, incidentali o consequenziali</li>
              <li>Non siamo responsabili per l'uso improprio dei font generati da parte degli utenti</li>
              <li>La nostra responsabilità totale non supererà mai l'importo di €100</li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm border mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Indennità</h2>
            <p className="text-muted-foreground leading-relaxed">
              Accetti di indennizzare e tenere indenne FontInsta.org, i suoi proprietari e affiliati da qualsiasi
              rivendicazione, danno, perdita o spesa (incluse le spese legali ragionevoli) derivante dal tuo uso del
              servizio o dalla violazione di questi Termini.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm border mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Modifiche ai Termini</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ci riserviamo il diritto di modificare questi Termini in qualsiasi momento. Le modifiche significative
              saranno comunicate attraverso:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Aggiornamento della data di "Ultimo aggiornamento" in cima a questa pagina</li>
              <li>Notifica via email agli utenti registrati (se applicabile)</li>
              <li>Avviso prominente sul sito web</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              L'uso continuato del servizio dopo le modifiche costituisce accettazione dei nuovi Termini.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm border mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Risoluzione delle Controversie</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Questi Termini sono disciplinati dalla legge italiana. Qualsiasi controversia sarà soggetta alla
              giurisdizione esclusiva dei tribunali italiani.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Prima di intraprendere azioni legali, ti incoraggiamo a contattarci per risolvere amichevolmente eventuali
              dispute.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm border mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Disposizioni Generali</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                <strong>Separabilità:</strong> Se una parte di questi Termini è ritenuta non valida, il resto rimane in
                vigore
              </li>
              <li>
                <strong>Rinuncia:</strong> Il mancato esercizio di un diritto non costituisce rinuncia a tale diritto
              </li>
              <li>
                <strong>Intero Accordo:</strong> Questi Termini costituiscono l'intero accordo tra te e FontInsta.org
              </li>
              <li>
                <strong>Cessione:</strong> Non puoi cedere i tuoi diritti senza il nostro consenso scritto
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contatti</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Per domande su questi Termini di Servizio, contattaci:
            </p>
            <p className="text-muted-foreground">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@fontinsta.org" className="text-amber-600 hover:text-amber-700">
                info@fontinsta.org
              </a>
              <br />
              <strong>Sito web:</strong>{" "}
              <a href="https://fontinsta.org" className="text-amber-600 hover:text-amber-700">
                fontinsta.org
              </a>
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
