import Image from 'next/image'
export default {
  github: 'https://github.com/heesungjang/javascript-questions-playground',
  titleSuffix: ' | JavaScript Questions',
  float: true,
  i18n: [
    { locale: "en-US", text: "English" },
    { locale: "ko", text: "한국어" },
    
  ],
  logo: (
    <>
      <Image src="/logo.svg" width={25} height={25} />
      <span className="font-semibold hidden md:inline ml-2">
        JavaScript Questions
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Playground website for javascript questions"
      />

      <meta name="author" content="Heesung Jang" />
      <meta
        property="og:url"
        content="https://jsquestions.vercel.app/questions"
      />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="692" />
      <meta property="og:title" content={`JavaScript Questions`} />
      <meta
        property="og:description"
        content="Playground website for javascript questions by Heesung Jang"
      />
      <meta
        property="og:image"
        content="https://mariosfakiolas.com/uploads/javascript.jpeg"
      />
      <meta name="apple-mobile-web-app-title" content="JS-Questions" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  font: false,  
  unstable_faviconGlyph: '👋',
  nextThemes: {
    defaultTheme: 'dark',
  },
  footer: {
    text() {
      
      return (
        <>MIT {new Date().getFullYear()} © Heesung Jang</>,
      );
    },
  },
  docsRepositoryBase:
    "https://github.com/heesungjang/javascript-questions-playground/tree/main/pages"
}
