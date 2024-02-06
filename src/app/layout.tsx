import Head from 'next/head'
import type { Metadata } from 'next'
import { Open_Sans as FontSans } from 'next/font/google'
import localFont from 'next/font/local'
import { cn } from '@/lib/utils'
import { Header } from '@/components/header'
import { ProgressDemo } from '@/app/_components/progress'

import { ThemeProvider } from './_components/theme-provider'

import './globals.css'
import dynamic from 'next/dynamic'

const DynamicFooter = dynamic(
  async () => await import('@/components/footer').then((mod) => mod.default),
  {
    loading: () => (
      <div>
        <p>
          <ProgressDemo />
          <br />
          Carregando...
        </p>
      </div>
    ),
    ssr: false
  }
)

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading'
})

export const metadata: Metadata = {
  title: 'Click Care Saúde - Home',
  description: 'Click Care Saúde cuidado domiciliar de excelência',
  keywords: [
    'Home Care',
    'Locação de equipamentos hospitalares',
    'Cuidador de idosos',
    'Enfermagem domiciliar',
    'Fisioterapia domiciliar',
    'Nutrição domiciliar',
    'Psicologia domiciliar',
    'Fonoaudiologia domiciliar',
    'Click Care Saúde',
    'Cuidadores'
  ]
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <Head>
        <link rel="icon" href="./favicon.ico" type="image/ico" />
        <link rel="manifest" href="../public/manifest.json" />

        <meta name="description" content="Curso Full-stack Next.js 14" />
        <meta
          name="keywords"
          content="Next.js, Next.js 14, React.js, Lucas Nhimi, Curso Next.js, JavaScript, TypeScript, Full-stack, Tailwind CSS"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}

          <DynamicFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
