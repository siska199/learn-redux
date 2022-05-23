import Head from "next/head";
import Form from "../components/Form";
import Card from "../components/Card";
import { useSelector } from "react-redux";
export default function Home() {
  const users = useSelector((state) => state.user.value);
  return (
    <div>
      <Head>
        <title>Lesson1 Redux</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen min-h-screen flex flex-row flex-wrap bg-dark p-[10rem] space-x-[3rem]">
        <Form />
        <div className="flex flex-col gap-5 justify-center">
          {users.length > 0 &&
            users.map((data, i) => <Card key={i} data={data} />)}
        </div>
      </main>
    </div>
  );
}
