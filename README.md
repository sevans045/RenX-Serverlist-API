# RenX-Serverlist-API

An API for accessing info about Renegade X

## Endpoints

* /player
* /server
* /mutator
* /playercount

You can filter by specifying a server property in the query, use names exactly as they appear in the responses (look at [examples](examples/), you can see the names there)

API endpoints: (base uri: /api)
All endpoints accept parameters that will filter out servers if they don't match the exact input (parameter names are caps sensitive)

## Filterable Parameters
| parameter | type | example |
| ---- | ---- | ------- |
| Name | string | Renegade X Server |
| NamePrefix | string | none | [Official] |
| Current Map | string | CNC-Field |
| Players | int | 32 |
| Bots | int | 64 | 
| Game Version | string | Open Beta 5.54.170 |
| UUID | string | 4b18bb67-e8b2-5e28-a97d-0987e7677010 |
| Mine Limit | int | 15 |
| bSteamRequired | boolean | false |
| bPrivateMessageTeamOnly | boolean | true |
| bPassworded | boolean | false |
| Player Limit | int | 64 |
| Vehicle Limit | int | 4
| bAutoBalanceTeams | boolean | true |
| Team Mode | int | 3 |
| bSpawnCrates | boolean | true |
| CrateRespawnAfterPickup | boolean | 30 |
| Time Limit | int | 0 |

## Methods
### GET /player
### Requests

| parameter | type | default |
| --------- | ---- | ------- |
| Any server parameter | string | (varies) |

### Return values
* Server Name, Server UUID and Player Array
* [Example output](examples/player.json)

### GET /mutator
### Requests

| parameter | type | default |
| --------- | ---- | ------- |
| Any server parameter | string | (varies) |

### Return values
* Server Name, Server UUID and Mutator Array
* [Example output](examples/mutator.json)

### GET /playercount
### Requests

| parameter | type | default |
| --------- | ---- | ------- |
| Any server parameter | string | (varies) |

### Return values
* Player Count
* [Example output](examples/playercount.json)

### GET /server
### Requests

| parameter | type | default |
| --------- | ---- | ------- |
| Any server parameter | string | (varies) |

### Return values
* All variables
* [Example output](examples/server.json)
