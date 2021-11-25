const { requestURL, requestUserAgent, isBehindProxy, rateLimitWindowDurationMinutes, rateLimitWindowMax, serverlistQueryIntervalSeconds, listenPort, uniqueUUID } = require("../config/config.json")

const fs = require("fs")
const app = require("express")()
const rateLimit = require("express-rate-limit")
const limiter = rateLimit({
  windowMs: rateLimitWindowDurationMinutes * 60 * 1000,
  max: rateLimitWindowMax
});
const axios = require("axios").default
const port = process.env.PORT || listenPort

if (uniqueUUID.match("[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}") == null) {
  console.error("Something is wrong with the UUID:( https://www.regextester.com/99148")
  process.exit(0)
}

const routes = require("./routes/")

app.use("/api", routes)
app.use(limiter)

if (isBehindProxy) {
  app.set("trust proxy", 1)
  console.log("Trust proxy enabled (this means you are using a proxy)")
}

app.listen(port, () => {
  getInfo()
  setInterval(getInfo, serverlistQueryIntervalSeconds * 1000)
  console.log(`Listening on port ${port}`)
})

function getInfo() {
  axios.get(requestURL,
  { headers: { 'User-Agent': requestUserAgent }  } )
    .then(resp => {
        fs.writeFileSync("./storage/raw.json", JSON.stringify(resp.data, null, 2))
    })
    .catch(err => {
        console.error(err)
    });
    axios.get("https://static.ren-x.com/launcher_data/version/release.json")
      .then(resp => {
        fs.writeFileSync("./storage/version.json", JSON.stringify(resp.data, null, 2))
      })
      .catch(err => {
        console.error(err)
      })
}
