import "/shared/style.css"
import type {AppProps} from "next/app"
import {env} from "env"

if (typeof window !== "undefined") {
  console.log("timestamp", env.timestamp)
}

export default function App({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}
