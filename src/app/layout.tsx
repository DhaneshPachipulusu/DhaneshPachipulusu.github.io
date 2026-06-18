import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = `${profile.name} — DevOps Engineer · Backend Engineer`;
const description = `${profile.name} — DevOps Engineer (Backend & AI Applications) designing, deploying, scaling, monitoring and securing production systems with AWS, Kubernetes, Docker, CI/CD, FastAPI, Prometheus and Grafana. Backend & DevOps Engineer @ Nainovate AI · TCS Digital offer holder.`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description,
  applicationName: "Dhaneshwara Rao — Portfolio",
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: [
    profile.name,
    "Dhaneswara Rao",
    "DevOps Engineer",
    "Platform Engineer",
    "Cloud Engineer",
    "Backend Engineer",
    "AI Applications Engineer",
    "AWS",
    "Kubernetes",
    "Docker",
    "CI/CD",
    "FastAPI",
    "Prometheus",
    "Grafana",
    "RAG",
    "Cloud Engineer",
    "Platform Engineer",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: profile.siteUrl,
    title,
    description,
    siteName: `${profile.name} — Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@DhaneshPachipulusu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#07080c",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "DevOps Engineer, Backend Engineer, AI Applications Engineer",
  description,
  url: profile.siteUrl,
  email: profile.email,
  worksFor: { "@type": "Organization", name: "Nainovate AI" },
  sameAs: [profile.socials.github, profile.socials.linkedin],
  knowsAbout: [
    "AWS",
    "Kubernetes",
    "Docker",
    "CI/CD",
    "FastAPI",
    "Backend Development",
    "DevOps",
    "Prometheus",
    "Grafana",
    "Retrieval-Augmented Generation",
    "AI Engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
