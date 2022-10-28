import express from "express";
import { PORT } from "./config.js";

import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.json());
const __public = join(__dirname, "../client/dist");
app.use(express.static(__public));

app.listen(PORT, () => {
  console.log(
`Server listening on port ${PORT}
${__public}`
  );
});

