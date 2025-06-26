import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="BengalSub - Bangladesh's premier student-led underwater robotics team. Learn about our journey, team, and innovations in AUV technology." />
        <meta name="keywords" content="BengalSub, Bangladesh, robotics, underwater, AUV, RoboSub, student team, engineering" />
        <meta name="author" content="BengalSub Team" />
        <meta property="og:title" content="BengalSub - Bangladesh Underwater Robotics" />
        <meta property="og:description" content="Bangladesh's premier student-led underwater robotics team. Learn about our journey, team, and innovations in AUV technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bengalsub.com/" />
        <meta property="og:image" content="https://www.bengalsub.com/BengalSub-web/assets/BengalSublogo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BengalSub - Bangladesh Underwater Robotics" />
        <meta name="twitter:description" content="Bangladesh's premier student-led underwater robotics team." />
        <meta name="twitter:image" content="https://www.bengalsub.com/BengalSub-web/assets/BengalSublogo.png" />
        <link rel="canonical" href="https://www.bengalsub.com/" />
      </Head>
      <body className="bg-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 