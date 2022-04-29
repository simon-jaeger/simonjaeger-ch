import Head from "next/head"
import FancyLink from "components/FancyLink"
import {theme} from "tailwind.config"
import {useEffect} from "react"

export default function Page() {
  useEffect(() => {
    document.documentElement.lang = "de-ch"
  }, [])

  return (<>
    <Head>
      <title>Simon Jäger</title>
      <meta
        name="description"
        content="Web- und App-Entwickler aus derSchweiz"
      />
      <meta property="og:title" content="Simon Jäger"/>
      <meta
        property="og:description"
        content="Web- und App-Entwickler aus derSchweiz"
      />
      <meta property="og:image" content="/og-banner.png"/>
      <link rel="icon" href="/favicon.png"/>
      <link rel="manifest" href="/manifest.json"/>
    </Head>

    <main className="px-20 sm:px-6 mt-[20vh] sm:mt-10">
      <div className="lg:[zoom:1.25] mx-auto  max-w-6xl">
        <h1 className="mb-5 text-7xl font-bold uppercase sm:mb-3 sm:text-5xl">
          Simon Jäger
        </h1>
        <h2 className="mb-10 text-xl font-bold uppercase sm:mb-4">
          Web- und App-Entwickler
        </h2>
        <p className="text-xl sm:leading-relaxed">
          Hallo, ich bin Simon, ein Full Stack Developer aus der
          Schweiz. <br className="sm:hidden"/>
          Kontaktier mich via <FancyLink
          text="E-Mail"
          to="mailto:simon.pascal.jaeger@gmail.com"
          color={theme.colors.green["400"]}
        />, sieh dir meine Projekte auf <FancyLink
          text="GitHub"
          to="https://github.com/simon-jaeger"
          color={theme.colors.blue["400"]}
        /> an oder folge meinem Blog auf <FancyLink
          text="Hashnode"
          to="https://blog.simonjaeger.ch"
          color={theme.colors.red["400"]}
        />.
        </p>
      </div>
    </main>
  </>)
}
