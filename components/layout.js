import Link from "next/link"
import styles from "@/pages/page.module.css"


export default function RootLayout({ children }) {
  return (
    <div className={styles.navigation}>
        <div className={styles.navigationLinks}>
          <Link href="/">Home</Link>
          <Link href="/contacts">Contacts</Link>
          <Link href={"/news/top-stories"}> Top Stories</Link>
          <Link href={"/news/popular"}> Popular</Link>
        </div>
      {children}
    </div>
  )
}