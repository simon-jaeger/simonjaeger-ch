export default function NoSSR({children}) {
  return (
    <div suppressHydrationWarning className="contents">
      {typeof window === "undefined" ? null : children}
    </div>
  )
}
