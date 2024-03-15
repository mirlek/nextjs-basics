import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import RootLayout from "@/components/layout";

export default function Home() {
  return (
    <RootLayout>
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
          <p>Find in-depth information about Next.js features and API.</p>
        </Link>
        <Link href="/learn/angular" className={styles.card}>
          <h2>
          The Norwegian Opera and Ballet Theater <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </Link>
        <Link href="/learn/next" className={styles.card}>
          <h2>
          Fram Museum <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </Link>
        <Link href="/learn/vue" className={styles.card}>
          <h2>
          Akershus Fortress <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </Link>
      </div>
    </main>
    </RootLayout>
  );
}


const API_KEY = 'f8768aadf583429c9ba0e34781adef19'