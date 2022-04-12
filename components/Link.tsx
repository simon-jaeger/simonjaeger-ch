import NextLink from "next/link"

export default function Link({text, to, color}:
                               { text: string, to: string, color: string }) {
  return <NextLink href={to}>
    <a
      target="_blank"
      className="inline-block relative px-[2px] font-semibold [--overlay:0%] enter:[--overlay:100%]"
    >
      <span>{text}</span>
      <span
        className="absolute right-0 bottom-0 left-0 h-1"
        style={{backgroundColor: color}}
      ></span>
      <span
        className="absolute inset-0 opacity-20 transition-all"
        style={{
          backgroundColor: color,
          clipPath: "polygon(0 0, var(--overlay) 0, var(--overlay) 100%, 0% 100%)",
        }}
      ></span>
    </a>
  </NextLink>
}
