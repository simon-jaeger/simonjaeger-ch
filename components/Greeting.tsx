interface Props {
  lang: Lang
  hour: number
}

const options = [
  {
    from: 0,
    to: 11,
    text: {
      "de-ch": "Guten Morgen",
      "en-us": "Good morning",
    } as { [k in Lang]: string },
  },
  {
    from: 12,
    to: 17,
    text: {
      "de-ch": "Guten Tag",
      "en-us": "Good afternoon",
    } as { [k in Lang]: string },
  },
  {
    from: 18,
    to: 24,
    text: {
      "de-ch": "Guten Abend",
      "en-us": "Good evening",
    } as { [k in Lang]: string },
  },
]

export default function Greeting(p: Props) {
  const greeting = options.find((x) => p.hour >= x.from && p.hour <= x.to)?.text[p.lang]
  return <span>{greeting ?? "Hi"}</span>
}
