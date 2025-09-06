import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Chi Siamo - FontInsta.org | La Storia del Nostro Generatore di Font",
  description:
    "Scopri la storia di FontInsta.org, il generatore di font per Instagram più amato in Italia. La nostra missione è rendere unico il tuo profilo social.",
  openGraph: {
    title: "Chi Siamo - FontInsta.org",
    description: "La storia del generatore di font per Instagram più amato in Italia",
    url: "https://fontinsta.org/chi-siamo",
  },
}

export default function ChiSiamo() {
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
          <h1 className="text-4xl font-bold text-foreground mb-8">Chi Siamo</h1>

          <div className="bg-card rounded-lg p-8 shadow-sm border mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">La Nostra Storia</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              FontInsta.org nasce nel 2024 dalla passione per la creatività digitale e l'innovazione nel mondo dei
              social media. Siamo un team di sviluppatori e designer italiani che ha notato quanto fosse difficile per
              gli utenti trovare font speciali e caratteri unici per personalizzare i propri profili Instagram.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              La nostra missione è semplice: fornire a tutti gli utenti italiani uno strumento gratuito, veloce e
              intuitivo per trasformare il testo normale in font creativi e accattivanti per Instagram e altri social
              media.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm border mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Cosa Ci Rende Speciali</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span>
                  <strong>100% Gratuito:</strong> Tutti i nostri font sono completamente gratuiti, senza costi nascosti
                  o abbonamenti.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span>
                  <strong>Anteprima Instagram:</strong> Siamo i primi in Italia a offrire un'anteprima realistica di
                  come apparirà il tuo testo su Instagram.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span>
                  <strong>Oltre 70 Font:</strong> La più ampia collezione di font speciali per Instagram disponibile in
                  italiano.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span>
                  <strong>Velocità:</strong> Trasformazione istantanea del testo senza attese o registrazioni.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm border mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Il Nostro Impegno</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ci impegniamo costantemente a migliorare FontInsta.org aggiungendo nuovi font, ottimizzando le prestazioni
              e ascoltando i feedback della nostra community. Ogni aggiornamento è pensato per rendere l'esperienza
              utente sempre più fluida e piacevole.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Crediamo che la creatività non debba avere limiti e che ogni utente meriti di esprimere la propria
              personalità attraverso font unici e accattivanti sui social media.
            </p>
          </div>

          <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contattaci</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hai domande, suggerimenti o vuoi semplicemente dire ciao? Siamo sempre felici di sentire dalla nostra
              community!
            </p>
            <p className="text-muted-foreground">
              Scrivici a:{" "}
              <a href="mailto:info@fontinsta.org" className="text-amber-600 hover:text-amber-700 font-medium">
                info@fontinsta.org
              </a>
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
