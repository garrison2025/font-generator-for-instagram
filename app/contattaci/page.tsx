import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Mail, MessageCircle, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contattaci - FontInsta.org | Supporto e Assistenza Font Instagram",
  description:
    "Hai bisogno di aiuto con FontInsta.org? Contatta il nostro team per supporto, suggerimenti o collaborazioni. Risposta garantita entro 24 ore.",
  openGraph: {
    title: "Contattaci - FontInsta.org",
    description: "Supporto e assistenza per il generatore di font Instagram",
    url: "https://fontinsta.org/contattaci",
  },
}

export default function Contattaci() {
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
          <h1 className="text-4xl font-bold text-foreground mb-8">Contattaci</h1>

          <div className="bg-card rounded-lg p-8 shadow-sm border mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Come Possiamo Aiutarti?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Il team di FontInsta.org è sempre disponibile per rispondere alle tue domande, ricevere feedback o
              discutere di possibili collaborazioni. Siamo qui per rendere la tua esperienza con i font Instagram sempre
              migliore!
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-amber-50 rounded-lg border border-amber-200">
                <Mail className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Email Principale</h3>
                <a href="mailto:info@fontinsta.org" className="text-amber-600 hover:text-amber-700 font-medium">
                  info@fontinsta.org
                </a>
              </div>

              <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
                <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Supporto Tecnico</h3>
                <p className="text-sm text-muted-foreground">Per problemi tecnici o bug</p>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Tempo di Risposta</h3>
                <p className="text-sm text-muted-foreground">Entro 24 ore lavorative</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm border mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Domande Frequenti</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">I font funzionano su tutti i dispositivi?</h3>
                <p className="text-muted-foreground">
                  Sì! I nostri font sono basati su caratteri Unicode e funzionano su tutti i dispositivi moderni,
                  inclusi smartphone, tablet e computer.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Posso usare i font anche su altre piattaforme?</h3>
                <p className="text-muted-foreground">
                  Assolutamente! Oltre a Instagram, puoi usare i nostri font su Facebook, Twitter, TikTok, WhatsApp e
                  qualsiasi altra piattaforma che supporti il testo Unicode.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">È davvero tutto gratuito?</h3>
                <p className="text-muted-foreground">
                  Sì, FontInsta.org è completamente gratuito. Non ci sono costi nascosti, abbonamenti o limiti di
                  utilizzo.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Posso suggerire nuovi font?</h3>
                <p className="text-muted-foreground">
                  Certamente! Siamo sempre alla ricerca di nuovi font da aggiungere. Scrivici con i tuoi suggerimenti!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 border border-amber-200">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Collaborazioni e Partnership</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sei un influencer, un'agenzia di marketing o un'azienda interessata a collaborare con FontInsta.org? Siamo
              aperti a partnership strategiche che possano portare valore alla nostra community.
            </p>
            <p className="text-muted-foreground">
              Contattaci per discutere opportunità di collaborazione, sponsorizzazioni o integrazioni personalizzate.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
