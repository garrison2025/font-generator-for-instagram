import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Font per Instagram - Generatore Gratuito",
  description:
    "Genera, copia e incolla font speciali per Instagram. Semplice, veloce e gratuito.",
  keywords:
    "font per instagram, font instagram, generatore font instagram, caratteri speciali instagram, font per instagram gratis, scritte instagram, font instagram copia incolla, caratteri instagram, font aesthetic instagram, generatore caratteri instagram, font per bio instagram, font instagram italiano",
  generator: "FontInsta.org",
  openGraph: {
    title: "Font per Instagram Gratuito | 70+ Stili Unici | FontInsta.org",
    description:
      "🎨 Il miglior generatore di font per Instagram in italiano! 70+ font per Instagram gratuiti: eleganti, moderni, divertenti. Anteprima Instagram inclusa!",
    url: "https://fontinsta.org",
    siteName: "FontInsta.org - Font per Instagram",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "https://fontinsta.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FontInsta.org - Generatore di Font per Instagram Gratuito con 70+ Stili",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Font per Instagram Gratuito | 70+ Stili | FontInsta.org",
    description:
      "🎨 Genera font per Instagram unici e gratuiti! 70+ stili disponibili con anteprima Instagram. Il generatore più completo d'Italia!",
    images: ["https://fontinsta.org/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://fontinsta.org",
  },
  authors: [{ name: "FontInsta.org Team" }],
  creator: "FontInsta.org",
  publisher: "FontInsta.org",
  category: "Technology",
  classification: "Font Generator Tool",
  other: {
    "google-site-verification": "your-google-verification-code-here",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        <link rel="preload" href="/android-chrome-192x192.png" as="image" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vercel.live" />

        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#f59e0b" />
        <meta name="msapplication-TileColor" content="#f59e0b" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        <link rel="canonical" href="https://fontinsta.org" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "FontInsta.org - Font per Instagram",
              alternateName: "Generatore Font Instagram",
              description:
                "Generatore gratuito di font per Instagram con oltre 70 stili diversi. Crea caratteri speciali per Instagram, copia e incolla facilmente.",
              url: "https://fontinsta.org",
              applicationCategory: "UtilitiesApplication",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript. Requires HTML5.",
              softwareVersion: "1.0",
              releaseNotes: "Generatore completo di font per Instagram con anteprima in tempo reale",
              screenshot: "https://fontinsta.org/screenshot.jpg",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "EUR",
                availability: "https://schema.org/InStock",
                validFrom: "2025-01-01",
              },
              author: {
                "@type": "Organization",
                name: "FontInsta.org",
                url: "https://fontinsta.org",
              },
              publisher: {
                "@type": "Organization",
                name: "FontInsta.org",
                url: "https://fontinsta.org",
                logo: {
                  "@type": "ImageObject",
                  url: "https://fontinsta.org/android-chrome-512x512.png",
                  width: 512,
                  height: 512,
                },
              },
              inLanguage: "it-IT",
              audience: {
                "@type": "Audience",
                audienceType: "Instagram users, social media creators, influencers",
              },
              keywords: "font per instagram, generatore font, caratteri speciali, instagram font, font gratuiti",
              featureList: [
                "70+ font per Instagram gratuiti",
                "Anteprima Instagram in tempo reale",
                "Copia e incolla con un click",
                "Compatibile con tutti i dispositivi",
                "Nessuna registrazione richiesta",
                "Supporto Unicode completo",
              ],
              potentialAction: [
                {
                  "@type": "UseAction",
                  target: "https://fontinsta.org",
                  object: "Font Generator for Instagram",
                },
                {
                  "@type": "SearchAction",
                  target: "https://fontinsta.org?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "I font per Instagram funzionano su tutti i dispositivi?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sì, tutti i nostri font per Instagram utilizzano caratteri Unicode standard che funzionano perfettamente su iPhone, Android, computer e tablet. Compatibilità garantita al 100%.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quanti font per Instagram posso generare gratuitamente?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Illimitati! FontInsta.org offre accesso gratuito e illimitato a tutti i 70+ font per Instagram. Nessuna registrazione richiesta, nessun limite di utilizzo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Come scegliere i migliori font per Instagram?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Scegli font per Instagram che riflettano la tua personalità: eleganti per brand professionali, divertenti per contenuti casual, gotici per temi dark. Usa la nostra anteprima per decidere.",
                  },
                },
                {
                  "@type": "Question",
                  name: "I font per Instagram influenzano l'algoritmo?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "I font per Instagram creativi possono aumentare significativamente l'engagement dei tuoi post, aiutandoti a distinguerti nel feed e attirare più like e commenti.",
                  },
                },
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "Come Creare Font per Instagram",
              description: "Guida passo-passo per creare font per Instagram unici e accattivanti",
              image: "https://fontinsta.org/how-to-image.jpg",
              totalTime: "PT2M",
              estimatedCost: {
                "@type": "MonetaryAmount",
                currency: "EUR",
                value: "0",
              },
              supply: [
                {
                  "@type": "HowToSupply",
                  name: "Testo da trasformare",
                },
                {
                  "@type": "HowToSupply",
                  name: "Dispositivo con browser web",
                },
              ],
              tool: [
                {
                  "@type": "HowToTool",
                  name: "FontInsta.org",
                },
              ],
              step: [
                {
                  "@type": "HowToStep",
                  name: "Inserisci il testo",
                  text: "Scrivi il testo che vuoi trasformare nella casella di input di FontInsta.org",
                  image: "https://fontinsta.org/step1.jpg",
                },
                {
                  "@type": "HowToStep",
                  name: "Scegli il font per Instagram",
                  text: "Naviga tra oltre 70 font per Instagram diversi organizzati per categoria",
                  image: "https://fontinsta.org/step2.jpg",
                },
                {
                  "@type": "HowToStep",
                  name: "Visualizza l'anteprima",
                  text: "Usa la funzione anteprima per vedere come apparirà il font su Instagram",
                  image: "https://fontinsta.org/step3.jpg",
                },
                {
                  "@type": "HowToStep",
                  name: "Copia e incolla su Instagram",
                  text: "Clicca il pulsante copia e incolla il font per Instagram nel tuo post o bio",
                  image: "https://fontinsta.org/step4.jpg",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense
          fallback={
            <div className="min-h-screen bg-background flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                <p className="text-sm text-muted-foreground">Caricamento FontInsta.org...</p>
              </div>
            </div>
          }
        >
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
