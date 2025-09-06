import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - FontInsta.org | Informativa sulla Privacy",
  description:
    "Leggi la nostra informativa sulla privacy per capire come FontInsta.org protegge i tuoi dati personali e rispetta la tua privacy online.",
  openGraph: {
    title: "Privacy Policy - FontInsta.org",
    description: "Informativa sulla privacy di FontInsta.org",
    url: "https://fontinsta.org/privacy",
  },
}

export default function Privacy() {
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
          <h1 className="text-4xl font-bold text-foreground mb-8">Informativa sulla Privacy</h1>

          <div className="bg-card rounded-lg p-8 shadow-sm border mb-8">
            <p className="text-sm text-muted-foreground mb-4">
              <strong>Ultimo aggiornamento:</strong> 4 settembre 2025
            </p>
            <p className="text-muted-foreground leading-relaxed">
              FontInsta.org ("noi", "nostro" o "FontInsta") si impegna a proteggere la privacy dei propri utenti. Questa
              informativa descrive come raccogliamo, utilizziamo e proteggiamo le informazioni quando visiti il nostro
              sito web fontinsta.org.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm border mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Informazioni che Raccogliamo</h2>

            <h3 className="text-lg font-semibold text-foreground mb-3">1.1 Informazioni Fornite Volontariamente</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Indirizzo email quando ci contatti tramite info@fontinsta.org</li>
              <li>Messaggi e comunicazioni che ci invii</li>
              <li>Feedback e suggerimenti che condividi con noi</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mb-3">1.2 Informazioni Raccolte Automaticamente</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Indirizzo IP e informazioni del dispositivo</li>
              <li>Tipo di browser e sistema operativo</li>
              <li>Pagine visitate e tempo trascorso sul sito</li>
              <li>Dati di utilizzo anonimi tramite Vercel Analytics</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mb-3">1.3 Cosa NON Raccogliamo</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Il testo che inserisci nel generatore di font (rimane solo nel tuo browser)</li>
              <li>I font che generi o copi</li>
              <li>Informazioni personali sensibili</li>
              <li>Dati di geolocalizzazione precisa</li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm border mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Come Utilizziamo le Informazioni</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Per fornire e migliorare i nostri servizi</li>
              <li>Per rispondere alle tue domande e richieste di supporto</li>
              <li>Per analizzare l'utilizzo del sito e ottimizzare l'esperienza utente</li>
              <li>Per prevenire abusi e garantire la sicurezza del sito</li>
              <li>Per rispettare obblighi legali quando necessario</li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm border mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Condivisione delle Informazioni</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Non vendiamo, affittiamo o condividiamo le tue informazioni personali con terze parti</strong>
              per scopi commerciali. Potremmo condividere informazioni solo nei seguenti casi:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Con il tuo consenso esplicito</li>
              <li>Per rispettare obblighi legali o ordini giudiziari</li>
              <li>Per proteggere i diritti, la proprietà o la sicurezza di FontInsta.org</li>
              <li>Con fornitori di servizi che ci aiutano a gestire il sito (es. Vercel per l'hosting)</li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm border mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Cookie e Tecnologie Simili</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              FontInsta.org utilizza cookie e tecnologie simili per:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-1">
              <li>Salvare le tue preferenze (font preferiti, tema scuro/chiaro)</li>
              <li>Analizzare il traffico del sito tramite Vercel Analytics</li>
              <li>Migliorare le prestazioni e la sicurezza del sito</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Puoi gestire i cookie attraverso le impostazioni del tuo browser. Nota che disabilitare i cookie potrebbe
              limitare alcune funzionalità del sito.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm border mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. I Tuoi Diritti (GDPR)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In conformità al Regolamento Generale sulla Protezione dei Dati (GDPR), hai i seguenti diritti:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                <strong>Accesso:</strong> Richiedere una copia dei tuoi dati personali
              </li>
              <li>
                <strong>Rettifica:</strong> Correggere dati inesatti o incompleti
              </li>
              <li>
                <strong>Cancellazione:</strong> Richiedere la cancellazione dei tuoi dati
              </li>
              <li>
                <strong>Portabilità:</strong> Ricevere i tuoi dati in formato strutturato
              </li>
              <li>
                <strong>Opposizione:</strong> Opporti al trattamento dei tuoi dati
              </li>
              <li>
                <strong>Limitazione:</strong> Richiedere la limitazione del trattamento
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Per esercitare questi diritti, contattaci a:{" "}
              <a href="mailto:info@fontinsta.org" className="text-amber-600 hover:text-amber-700">
                info@fontinsta.org
              </a>
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm border mb-8">
            <h2 className="text-2xl font-semibent text-foreground mb-4">6. Sicurezza dei Dati</h2>
            <p className="text-muted-foreground leading-relaxed">
              Implementiamo misure di sicurezza appropriate per proteggere le tue informazioni contro accesso non
              autorizzato, alterazione, divulgazione o distruzione. Tuttavia, nessun metodo di trasmissione su Internet
              è completamente sicuro, e non possiamo garantire la sicurezza assoluta.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm border mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Modifiche a Questa Informativa</h2>
            <p className="text-muted-foreground leading-relaxed">
              Potremmo aggiornare questa informativa periodicamente. Ti notificheremo eventuali modifiche significative
              pubblicando la nuova informativa su questa pagina e aggiornando la data di "Ultimo aggiornamento".
            </p>
          </div>

          <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contatti</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Per domande su questa informativa sulla privacy o sui tuoi dati personali, contattaci:
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
