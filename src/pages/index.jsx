import Head from "next/head";
import Door from "../components/Door";
import Gift from "../components/Gift";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={styles.main}
        style={{ display: "flex", gap: "1rem", flexDirection: "row" }}
      >
        {/* <Gift /> */}
        <Door />
        <Door />
        <Door />
      </main>
    </div>
  );
}