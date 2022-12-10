import { Head } from "$fresh/runtime.ts";
import Header from "../islands/Header.jsx";

export default function Streams() {
  return (
    <>
      <Head>
        <title>streams &#8212; ltx</title>
        <meta name="title" content="streams &#8212; ltx" />
        <meta name="description" content="rocket launch coverage" />

        <link rel="stylesheet" href="/index.css" />
      </Head>
      <body>
        <main>
          <Header active="/streams"></Header>
        </main>
      </body>
    </>
  );
}
