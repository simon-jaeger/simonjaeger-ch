import {useRouter} from "next/router"
import {useEffect} from "react"
import Head from "next/head"
import FancyLink from "components/FancyLink"
import {theme} from "tailwind.config"

export default function Page() {
  const router = useRouter()
  useEffect(() => {
    document.documentElement.lang = 'en-us'
    if (window.navigator.language.toLowerCase().startsWith("de"))
      router.replace("/de/")
  }, [router])

  return (<>
    <Head>
      <title>Simon Jaeger</title>
      <meta
        name="description"
        content="Web and app developer from Switzerland"
      />
      <meta property="og:title" content="Simon Jaeger"/>
      <meta
        property="og:description"
        content="Web and app developer from Switzerland"
      />
      <meta property="og:image" content="/og-banner.png"/>
      <link rel="icon" href="/favicon.png"/>
      <link rel="manifest" href="/manifest.json"/>
    </Head>

    <main className="px-20 sm:px-6 mt-[20vh] sm:mt-10">
      <div className="lg:[zoom:1.25] mx-auto  max-w-6xl">
        <h1 className="mb-5 text-7xl font-bold uppercase sm:mb-3 sm:text-5xl">
          Simon Jaeger
        </h1>
        <h2 className="mb-10 text-xl font-bold uppercase sm:mb-4">
          Web and app developer
        </h2>
        <p className="text-xl sm:leading-relaxed">
          Hello, I’m Simon, a full stack developer from
          Switzerland. <br className="sm:hidden"/>
          Get in touch via <FancyLink
          text="email"
          to="mailto:simon.pascal.jaeger@gmail.com"
          color={theme.colors.green["400"]}
        />, check out my projects on <FancyLink
          text="GitHub"
          to="https://github.com/simon-jaeger"
          color={theme.colors.blue["400"]}
        /> or follow my blog on <FancyLink
          text="Hashnode"
          to="https://blog.simonjaeger.ch"
          color={theme.colors.red["400"]}
        />.
        </p>
      </div>
    </main>
  </>)
}

