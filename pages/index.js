import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>……中略……</Head>

      <main className={styles.main}>……中略……</main>

      <footer className={styles.footer}>……中略……</footer>
    </div>
  );
}
