// require("dotenv").config();
import express from "express";
const app = express();
const uri = process.env.DB_URI;
import { FetchNFTClient } from "@audius/fetch-nft";
var fetchClient = new FetchNFTClient();

let port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log(`Up on http://localhost:${port}`);

  fetchClient = new FetchNFTClient();
});

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/* --- Routes --- */

app.get("/", (req, res) => {
  res.send("Ollesol API");
});

app.get(`/wallet/:address`, async (req, res) => {
  let wallet = await fetchClient.getSolanaCollectibles([
    `8UXAnMyHSafYQAcKZwpTHfeDSC9F8qGWyoSLc4jHpAqH`,
  ]);
  res.send(wallet);
});
