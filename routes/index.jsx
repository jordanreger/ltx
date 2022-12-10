import { Head } from "$fresh/runtime.ts";
import Header from "../islands/Header.jsx";
import Footer from "../islands/Footer.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>ltx</title>
        <meta name="title" content="ltx" />
        <meta name="description" content="your one stop shop for everything space" />

        <link rel="shortcut icon" href="/ltx_logo.svg" />
        <link rel="preload" href="/index.css" as="style" />
        <link rel="stylesheet" media="all" href="/index.css" type="text/css" />

        <link rel="preload" href="/falcon_heavy.jpg" as="image" />
      </Head>
      <body>
        <main>
          <Header active="/"></Header>
          <article>
            <figure class="splash-container">
              <div class="splash" title="The SpaceX Falcon Heavy lifting off during the STP-2 launch"></div>
              <figcaption>source: <a href="https://flic.kr/p/2gk269e">SpaceX on Flickr</a></figcaption>
            </figure>
            <div class="subtitle">welcome to ltx.</div>
            <div class="body">
              ltx is your one stop shop for everything space.
              a launch schedule, an aerospace wiki and a stream dashboard all in one place.
              ltx aims to provide the best coverage of the aerospace field as possible.
              we believe that space travel is beneficial to life on earth, the next step in human exploration and should be open to all.
            </div>
          </article>
          <br/>
          <article>
            <div class="subtitle">free and open source</div>
            <div class="body">
              ltx is <a href="https://en.wikipedia.org/wiki/Free_content">free</a> and <a href="https://en.wikipedia.org/wiki/Open-source_software">open source</a>.
              that means if you really like this site, you can use it for yourself, under certain conditions;
              the content is under the <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> license.
              this means that you can reuse it, but you can't use it for commercial reasons.
              it also means that you also use it, keep it free and available!
              the software, however, is under the <a href="https://choosealicense.com/licenses/mit/">MIT license</a>.
            </div>
          </article>
          <Footer></Footer>
        </main>
      </body>
    </>
  );
}
