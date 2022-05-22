import Head from "next/head";
import Form from "../components/Form";
import Card from "../components/Card";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Lesson1 Redux</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen min-h-screen flex flex-row bg-dark p-[10rem]">
        <Form />
        <Card />
      </main>
    </div>
  );
}
