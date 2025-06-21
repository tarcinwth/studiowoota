import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Portfólio | Woota Studio",
  description: "Conheça o portfólio da Woota Studio: projetos de design, websites, social media e mídia para marcas inovadoras.",
  openGraph: {
    title: "Portfólio | Woota Studio",
    description: "Conheça o portfólio da Woota Studio: projetos de design, websites, social media e mídia para marcas inovadoras.",
    images: ["/portfolio/og-image.png"],
    type: "website",
    url: "https://woota.studio/portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio | Woota Studio",
    description: "Conheça o portfólio da Woota Studio: projetos de design, websites, social media e mídia para marcas inovadoras.",
    images: ["/portfolio/og-image.png"],
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 