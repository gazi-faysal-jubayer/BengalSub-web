import '../index.css';
import Navbar from '../components/Navbar';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BengalSub - Bangladesh Underwater Robotics</title>
        <meta name="title" content="BengalSub - Bangladesh Underwater Robotics" />
        <meta name="description" content="BengalSub is Bangladesh's premier student-led underwater robotics team. Learn about our journey, team, and innovations in AUV technology." />
        <meta name="keywords" content="BengalSub, Bangladesh, robotics, underwater, AUV, RoboSub, student team, engineering" />
        <meta name="author" content="BengalSub Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bengalsub.com/" />
        <meta property="og:title" content="BengalSub - Bangladesh Underwater Robotics" />
        <meta property="og:description" content="Bangladesh's premier student-led underwater robotics team. Learn about our journey, team, and innovations in AUV technology." />
        <meta property="og:image" content="https://www.bengalsub.com/assets/BengalSublogo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.bengalsub.com/" />
        <meta name="twitter:title" content="BengalSub - Bangladesh Underwater Robotics" />
        <meta name="twitter:description" content="Bangladesh's premier student-led underwater robotics team." />
        <meta name="twitter:image" content="https://www.bengalsub.com/assets/BengalSublogo.png" />
        <link rel="canonical" href="https://www.bengalsub.com/" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "BengalSub",
          "url": "https://www.bengalsub.com/",
          "logo": "https://www.bengalsub.com/assets/BengalSublogo.png",
          "sameAs": [
            "https://www.facebook.com/yourpage",
            "https://www.linkedin.com/company/yourpage"
          ]
        }` }} />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
} 