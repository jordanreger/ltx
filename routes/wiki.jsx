import { Head } from "$fresh/runtime.ts";
import Header from "../islands/Header.jsx";

export default function Wiki() {
  return (
    <>
      <Head>
        <title>wiki &#8212; ltx</title>
        <meta name="title" content="wiki &#8212; ltx" />
        <meta name="description" content="rocket launch coverage" />

        <link rel="stylesheet" href="/index.css" />
      </Head>
      <body>
        <main>
          <Header active="/wiki"></Header>
        </main>
      </body>
    </>
  );
}
