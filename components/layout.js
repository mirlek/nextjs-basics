import Link from "next/link"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
            <ul className="navigation">
              <Link href="/">Home</Link>
              <Link href="/contacts">Contacts</Link>
              <Link href={"/news/top-stories"}> Top Stories</Link>
              <Link href={"/news/popular"}> Popular</Link>
            </ul>
         {children}
        </div>
      </body>
    </html>
  )
}