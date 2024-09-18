import Image from "next/image";
import styles from "./page.module.css";
import Gemini from "../../composants/Gemini";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Gemini></Gemini>
      </main>
    </div>
  );
}
