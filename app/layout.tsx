import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://akshayjohn.vercel.app'),
  title: 'Akshay John A | Data Science Postgraduate | AI/ML & Data Professional',
  description:
    'Official portfolio of Akshay John A — Data Science Postgraduate specializing in AI/ML, Machine Learning, Python, SQL, Data Analysis, BI Analytics, and Data Engineering.',
  authors: [{ name: 'Akshay John A' }],
  keywords: [
    'Akshay John A',
    'Data Science',
    'Data Scientist',
    'AI/ML Engineer',
    'ML Engineer',
    'Data Analyst',
    'BI Analyst',
    'AI Engineer',
    'Data Engineer',
    'Bengaluru',
    'Python',
    'SQL',
    'Machine Learning',
  ],
  openGraph: {
    title: 'Akshay John A | Data Science Postgraduate | AI/ML Professional',
    description:
      'Explore the data science projects, machine learning models, experience, technical skills, and certifications of Akshay John A.',
    url: 'https://akshayjohn.vercel.app',
    siteName: 'Akshay John A Portfolio',
    images: [
      {
        url: '/images/profile.jpg',
        width: 800,
        height: 800,
        alt: 'Akshay John A Profile Photo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akshay John A | Data Science Postgraduate',
    description:
      'Data Science Postgraduate passionate about AI/ML, Data Analysis, Python, SQL, and statistical modeling.',
    images: ['/images/profile.jpg'],
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#090d16',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#090d16] text-slate-100 antialiased selection:bg-sky-500/30 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
