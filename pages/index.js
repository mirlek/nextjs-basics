import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import RootLayout from "@/components/layout";

export default function Home() {
  return (
    <RootLayout>
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
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
