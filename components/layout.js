import Link from "next/link"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
            <ul>
              <Link href="/">Home</Link>
              <Link href="/contacts">Contacts</Link>
            </ul>
         {children}
        </div>
      </body>
    </html>
  )
}