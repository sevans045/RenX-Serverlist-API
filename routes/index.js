const renx_data = require("../storage/raw.json")
const { uniqueUUID } = require(("../../config/config.json"))
const routes = require("express").Router()
const fs = require("fs")
const getUuid = require("uuid-by-string")

if (uniqueUUID.match("[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}") == null) {
  console.error("Something is wrong with the UUID:( https://www.regextester.com/99148")
  process.exit(0)
}

routes.get("/", (req, res) => {
  if (renx_data)
    res.status(200).send()
  else
    res.status(503).send()
})

// Information about servers
routes.get("/server", (req, res) => {
  let responseJSON = HandleServerInfo(req);
  res.status(200).json(responseJSON)
})

function HandleServerInfo(req) {
  let renx = filterByRequest(req)

  return renx;
}

// Information about players
routes.get("/player", (req, res) => {
  let responseJSON = HandlePlayerList(req);
  res.status(200).json(responseJSON)
})

function HandlePlayerList(req) {
  let renx = filterByRequest(req)
  let response = []

  for (const server in renx) {
    if (renx[server]["PlayerList"] != undefined) {
      let serverL = new Object()
      serverL.Name = renx[server]["Name"]
      serverL.UUID = renx[server]["UUID"]
      serverL.playerList = []

      for (const player in renx[server]["PlayerList"]) {
        let playerO = new Object()

        playerO.Name = renx[server]["PlayerList"][player].Name
        response.playerCount++

        serverL.playerList.push(playerO)
      }

      response.push(serverL)
    }
  }

  return response;
}

// Player count
routes.get("/playercount", (req, res) => {
  let responseJSON = HandlePlayerCount(req);
  res.status(200).json(responseJSON)
})

function HandlePlayerCount(req) {
  let renx = filterByRequest(req)
  let response = new Object()

  response.playerCount = 0

  for (const server in renx)
    for (const player in renx[server]["PlayerList"])
      response.playerCount++

  return response;
}

// Information about mutators
routes.get("/mutator", (req, res) => {
  let responseJSON = HandleMutatorList(req);
  res.status(200).json(responseJSON)
})

function HandleMutatorList(req) {
  let renx = filterByRequest(req)
  let response = []

  for (const server in renx) {
    if (renx[server]["Mutators"] != undefined) {
      let serverL = new Object()
      serverL.Name = renx[server]["Name"]
      serverL.UUID = renx[server]["UUID"]
      serverL.mutatorList = []

      for (const mut in renx[server]["Mutators"]) {
        let mutator = new Object()

        mutator.Name = renx[server]["Mutators"][mut].Name
        response.playerCount++

        serverL.mutatorList.push(mutator)
      }

      response.push(serverL)
    }
  }

  return response;
}

// Helper functions

// Every request must pass through here
function filterByRequest(req) {
  var renx = JSON.parse(fs.readFileSync("./storage/raw.json"))
  var version = JSON.parse(fs.readFileSync("./storage/version.json"))

  for (const property in req.query) {
    console.log(property)
    if (property == "Game Version" && req.query[property] == "latest")
      renx = renx.filter(server => server["Game Version"] == version["game"]["version_name"])
    else {

      renx = renx.filter(server => server[property] == req.query[property] || server["Variables"][property] == req.query[property])
    }
  }

  for (const server in renx) {
    renx[server].UUID = getUuid(renx[server].Port + renx[server].IP + uniqueUUID, 5);
    delete renx[server].IP;
    delete renx[server].Port;
  }

  return renx;
}

module.exports = routes
