import Link from "next/link"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <nav>
            <ul>

            </ul>
            <li>

            </li>
          </nav>
         {children}
        </div>
      </body>
    </html>
  )
}