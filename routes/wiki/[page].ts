import { HandlerContext } from "$fresh/server.ts";
import { Mark } from "https://deno.land/std@0.165.0/encoding/_yaml/mark.ts";
import { Marked } from "https://deno.land/x/markdown/mod.ts";

export const handler = async (_req: Request, ctx: HandlerContext): Response => {
  /*
  const url = new URL(req.url);
  const params = new URLSearchParams(url.search);
  const feed_url = params.get("url");

  const feed_xml = await fetch(feed_url)
        .then((res) => res.text())

  const feed = JSON.stringify(await parseFeed(feed_xml).catch((_) => {return true;}));

  return new Response(feed);
  */

  const page = ctx.params.page;

  let markdown = await Deno.readTextFile(`./wiki/${page}.md`);
  markdown = Marked.parse(markdown).content;

  const content = `
  <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />

      <title>${page} &#8212; ltx</title>
      <meta name="title" content="${page} &#8212; ltx">

      <link rel="preload" href="/index.css" as="style" />
      <link rel="stylesheet" media="all" href="/index.css" type="text/css" />
    </head>

    <body>
      <main>
        <header>
          <nav>
            <a href="/" class="ltx">ltx</a>
            <a href="/latest" class="latest">latest</a>
            <a href="/wiki" class="wiki">wiki</a>
            <a href="/streams" class="streams">streams</a>
          </nav>
        </header>
        <article>
          ${markdown}
        </article>
        <footer>
          <div class="right">
            <a href="https://sr.ht/~jordanreger/ltx" class="source">source</a>
          </div>
        </footer>
      </main>
    </body>
    </html>
  `;

  return new Response(content, { headers: { "content-type": "text/html" } });
};
