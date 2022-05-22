import Head from "next/head";
import { Card } from "../components/Card";
import { Form } from "../components/Form";
import styles from "../styles/Home.module.css";

export default function Home() {


  
  return (
    <div className={styles.container}>
      <Head>
        <title>Lesson1 Redux</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Form />
        <Card />
      </main>
    </div>
  );
}
