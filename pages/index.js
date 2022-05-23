import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "../styles/Home.module.css";
import { fetchMovies } from "../redux/features/movie";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies("parameter"));
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Lesson1 Redux</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>
    </div>
  );
}
