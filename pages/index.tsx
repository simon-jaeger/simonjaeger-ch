import Head from "next/head"
import {useEffect, useState} from "react"
import {spans} from "next/dist/build/webpack/plugins/profiling-plugin"
import Link from "components/Link"
import {theme} from "tailwind.config"
import Greeting from "components/Greeting"
import NoSSR from "components/NoSSR"

export default function Page() {
  const [lang, setLang] = useState<Lang>("en-us")

  useEffect(() => {
    setLang(window.navigator.language.toLowerCase().startsWith("de") ? "de-ch" : "en-us")
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (<>
    <Head>
      <title>
        {lang === "en-us" ? "Simon Jaeger" : "Simon Jäger"}
      </title>
      <meta
        name="description"
        content={lang === "en-us" ? "Web and app developer from Switzerland" : "Web- und App-Entwickler aus derSchweiz"}
      />
      <meta property="og:title" content="Simon Jaeger"/>
      <meta
        property="og:description"
        content="Web and app developer from Switzerland"
      />
      <meta property="og:image" content="og-banner.png"/>
      <link rel="icon" href="/favicon.png"/>
      <link rel="manifest" href="/manifest.json"/>
    </Head>

    <NoSSR>
      <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-green-400 via-blue-400 to-red-400"></div>

      <form className="flex fixed right-4 top-5 leading-none divide-x divide-gray-900 sm:bottom-4 sm:top-auto">
        <button
          type="button"
          className={`w-8 text-center ${lang === "en-us" && "font-bold"}`}
          onClick={() => setLang("en-us")}
        >EN
        </button>
        <button
          type="button"
          className={`w-8 text-center ${lang === "de-ch" && "font-bold"}`}
          onClick={() => setLang("de-ch")}
        >DE
        </button>
      </form>

      <main className="px-20 sm:px-6 mt-[20vh] sm:mt-10">
        <div className="lg:[zoom:1.25] mx-auto  max-w-6xl">
          <h1 className="mb-5 text-7xl font-bold uppercase sm:mb-3 sm:text-5xl">
            {lang === "en-us" ? "Simon Jaeger" : "Simon Jäger"}
          </h1>
          <h2 className="mb-10 text-xl font-bold uppercase sm:mb-4">
            {lang === "en-us" ? "Web and app developer" : "Web- und App-Entwickler"}
          </h2>
          <p className="text-xl sm:leading-relaxed">
            <Greeting lang={lang} hour={new Date().getHours()}/>,{" "}
            {lang === "en-us" ? <>
              I’m Simon, a full stack developer from
              Switzerland. <br className="sm:hidden"/>
              Get in touch via <Link
              text="email"
              to="mailto:simon.pascal.jaeger@gmail.com"
              color={theme.colors.green["400"]}
            />, check out my projects on <Link
              text="GitHub"
              to="https://github.com/simon-jaeger"
              color={theme.colors.blue["400"]}
            /> or follow my blog on <Link
              text="Hashnode"
              to="https://blog.simonjaeger.ch"
              color={theme.colors.red["400"]}
            />.
            </> : <>
              ich bin Simon, ein Fullstack-Entwickler aus der
              Schweiz. <br className="sm:hidden"/>
              Kontaktier mich via E-Mail <Link
              text="E-Mail"
              to="mailto:simon.pascal.jaeger@gmail.com"
              color={theme.colors.green["400"]}
            />, sieh dir meine Projekte auf <Link
              text="GitHub"
              to="https://github.com/simon-jaeger"
              color={theme.colors.blue["400"]}
            /> an oder folge meinem Blog auf <Link
              text="Hashnode"
              to="https://blog.simonjaeger.ch"
              color={theme.colors.red["400"]}
            />.
            </>}
          </p>
        </div>
      </main>
    </NoSSR>
  </>)
}

