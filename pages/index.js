import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import RootLayout from "@/components/layout";
import { useState } from "react";
import { useRouter } from "next/router"


export default function Home() {
  const links = [
    {
      title: "Top Stories", 
      desc: "Read articles currently on the homepage of the New York Times",
      path: "top-stories"
    }, 
    {
      title: "Popular", 
      desc: "Read the most popular articles on the New York Times",
      path: "popular"
    }
  ];
  const [query, getQuery] = useState();
  const router = useRouter();
  const handleOnChange = e => getQuery(e.target.value);
  const handleOnSubmit = e => {
    e.preventDefault()
    router.push(`/search/${query}`)
  }

  return (
    <RootLayout>
      <div>
    <main className={styles.main}>
    <div>
    <h1>OSLO</h1>
    </div>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/oslo.jpg"
          alt="OsloPic"
          width={1098}
          height={680}
          priority
                  />
      </div>

      <div className={styles.grid}>
        <Link href="/learn/react" className={styles.card}>
          <h2>
          Vigeland Sculpture Park <span>-&gt;</span>
          </h2>
        </Link>
        <Link href="/learn/angular" className={styles.card}>
          <h2>
          The Norwegian Opera and Ballet Theater <span>-&gt;</span>
          </h2>
        </Link>
        <Link href="/learn/next" className={styles.card}>
          <h2>
          Fram Museum <span>-&gt;</span>
          </h2>
        </Link>
        <Link href="/learn/vue" className={styles.card}>
          <h2>
          Akershus Fortress <span>-&gt;</span>
          </h2>
        </Link>
      </div>
      <div>
      <h1>New York Times NEWS</h1>
      <form onSubmit={handleOnSubmit}>
        <input type="text" onChange={handleOnChange} />
      </form>
      </div>
      <div className={styles.grid}>
          {links.map(link => {
            return( 
            <Link key={link.path} href={`news/${link.path}`} className={styles.card}>
                <h2>{link.title} &rarr;</h2>
                <p>{link.desc}</p>
            </Link>)
          })}
         
        </div>
    </main>
    </div>
    </RootLayout>
  );
}


