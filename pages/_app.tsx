import "/shared/style.css"
import type {AppProps} from "next/app"
import {env} from "env"
import PhysicsGimmick from "components/PhysicsGimmick"
import Link from "next/link"
import NoSSR from "components/NoSSR"
import {useRouter} from "next/router"

if (typeof window !== "undefined") {
  console.log("timestamp", env.timestamp)
}

export default function App({Component, pageProps}: AppProps) {
  const router = useRouter()

  return (<>
    <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-green-400 via-blue-400 to-red-400"></div>

    <nav className="flex fixed right-4 top-5 leading-none divide-x divide-gray-900 sm:bottom-4 sm:top-auto">
      <Link href="/">
        <a className={`w-8 text-center ${router.asPath === "/" && "font-bold"}`}>EN</a>
      </Link>
      <Link href="/de">
        <a className={`w-8 text-center ${router.asPath === "/de/" && "font-bold"}`}>DE</a>
      </Link>
    </nav>

    <Component {...pageProps} />

    <NoSSR>
      <PhysicsGimmick/>
    </NoSSR>
  </>)
}
