// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/index.jsx";
import * as $1 from "./routes/latest.jsx";
import * as $2 from "./routes/streams.jsx";
import * as $3 from "./routes/wiki.jsx";
import * as $4 from "./routes/wiki/[page].ts";
import * as $$0 from "./islands/Footer.jsx";
import * as $$1 from "./islands/Header.jsx";

const manifest = {
  routes: {
    "./routes/index.jsx": $0,
    "./routes/latest.jsx": $1,
    "./routes/streams.jsx": $2,
    "./routes/wiki.jsx": $3,
    "./routes/wiki/[page].ts": $4,
  },
  islands: {
    "./islands/Footer.jsx": $$0,
    "./islands/Header.jsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
