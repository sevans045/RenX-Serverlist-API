# RenX-Serverlist-API

An API for accessing info about Renegade X server info

Public version currently available at brotherhoodofnod.net/api

## Endpoints

/player
/server
/mutator
/playercount

You can filter by specifying a server property in the query, use names exactly as they appear in the responses (try just doing /server, you can see the names there)

`brotherhoodofnod.net/api/mutator?Game Version=latest`

```
[
    {
        "Name": "Noxids Anarchy - No Rules - Do whatever you want",
        "IP": "158.60.11.111",
        "Port": 1757,
        "mutatorList": [
            {
                "Name": "Rx_WebMutator"
            },
            {
                "Name": "FPI_Mutator_RXSS"
            }
        ]
    },
    {
        "Name": "FairPlayInc.uk EU Marathon",
        "IP": "188.40.00.00",
        "Port": 7477,
        "mutatorList": [
            {
                "Name": "Rx_WebMutator"
            },
            {
                "Name": "FPI_Mutator_RXSS"
            }
        ]
    },
    {
        "Name": "CT Marathon",
        "IP": "148.000.000.00",
        "Port": 7920,
        "mutatorList": [
            {
                "Name": "Rx_WebMutator"
            }
        ]
    }
]
```

`brotherhoodofnod.net/api/player?Name=CT Marathon`

```
[
    {
        "Name": "CT Marathon",
        "IP": "148.251.175.65",
        "Port": 7990,
        "playerList": [
            {
                "Name": "Player419"
            }
        ]
    }
]
```

`brotherhoodofnod.net/api/server?Current Map=CNC-Field`

```
[
    {
        "Name": "Noxids Anarchy - No Rules - Do whatever you want",
        "NamePrefix": "",
        "Current Map": "CNC-Field",
        "Bots": 0,
        "Players": 0,
        "Game Version": "Open Beta 5.54.170",
        "Attributes": [],
        "Variables": {
            "Mine Limit": 24,
            "bSteamRequired": false,
            "bPrivateMessageTeamOnly": false,
            "bPassworded": false,
            "bAllowPrivateMessaging": true,
            "Player Limit": 64,
            "Vehicle Limit": 11,
            "bAutoBalanceTeams": false,
            "Team Mode": 5,
            "bSpawnCrates": true,
            "CrateRespawnAfterPickup": 1,
            "Time Limit": 0
        },
        "Port": 8787,
        "IP": "188.40.71.171",
        "Levels": [
            {
                "Name": "CNC-Field",
                "GUID": "6D9F948843B4BF8BF3C96998CDE44D37"
            },
            {
                "Name": "CNC-Hourglass",
                "GUID": "A7ECC930415218C692A7D3A56021655D"
            },
            {
                "Name": "CNC-Walls",
                "GUID": "026A795241CE40AAE57093ADD4810B22"
            },
            {
                "Name": "CNC-GoldRush",
                "GUID": "20ACB5B445B2E3A6DA39918DB773C2D9"
            },
            {
                "Name": "CNC-Whiteout",
                "GUID": "256675504C8A20C609EEA1896906B996"
            },
            {
                "Name": "CNC-Islands",
                "GUID": "F0D9767846BB9C5D64FAB5905584757C"
            },
            {
                "Name": "CNC-Darkside",
                "GUID": "AC651DFC4E8CAB446E9111B8C1129013"
            },
            {
                "Name": "CNC-Mesa",
                "GUID": "F433868B400EA4497E4C68BA65CECF51"
            },
            {
                "Name": "CNC-Volcano",
                "GUID": "AE6F2CD146F50985FB63859722C92F16"
            },
            {
                "Name": "CNC-HeXmountain",
                "GUID": "DC7FAEA046541FBA4295D9B69B73D788"
            },
            {
                "Name": "CNC-Canyon",
                "GUID": "4A9EFF9F4FC4678965B3058B649F049E"
            },
            {
                "Name": "CNC-Eyes",
                "GUID": "847808EF42450D93DDA38294128A1E3A"
            },
            {
                "Name": "CNC-Complex",
                "GUID": "32566DFC4D753883F1790390F9370D45"
            },
            {
                "Name": "CNC-Under",
                "GUID": "86DB70AE40C3F5A42E81A292EF572008"
            },
            {
                "Name": "CNC-CliffSide",
                "GUID": "E91F3FE64CBA200A76B6439C6CA0CE6D"
            },
            {
                "Name": "CNC-Crash_Site",
                "GUID": "42B86F1D4C1943C85FDDBA85D3C74F60"
            },
            {
                "Name": "CNC-Field_X",
                "GUID": "CE561820447A953D2CD8F7A773A79462"
            },
            {
                "Name": "CNC-Oasis",
                "GUID": "9E87066A4AEDD96D585227BF6249C8C6"
            },
            {
                "Name": "CNC-Outposts",
                "GUID": "48E7EEDA4BDC83F8E4390DB71C19302B"
            },
            {
                "Name": "CNC-Reservoir",
                "GUID": "3E815EAA46515475EFF4EAB01D811D36"
            },
            {
                "Name": "CNC-Snow",
                "GUID": "2F2780A54F0672891DB2168488FB2532"
            },
            {
                "Name": "CNC-Tomb",
                "GUID": "CFD35ACE427667FC40E71BAD129D6FFE"
            },
            {
                "Name": "CNC-Tunnels",
                "GUID": "D30354D2464D7F650000E1BA561488F1"
            },
            {
                "Name": "CNC-Uphill",
                "GUID": "908FC4B84E4CDA70B18769B874BE3F56"
            },
            {
                "Name": "CNC-Arctic_Stronghold",
                "GUID": "B87FC222499A6D72E3DB24B24F58CD39"
            },
            {
                "Name": "CNC-Daybreak",
                "GUID": "648E30F547D4730D199ADEB9EE42E9CC"
            },
            {
                "Name": "CNC-Steppe",
                "GUID": "CF4810DE43A68BDA6975A890F3FECA1E"
            },
            {
                "Name": "CNC-Forest",
                "GUID": "76F9B0DB49E014E4A82F80804DF28D28"
            },
            {
                "Name": "CNC-Fort",
                "GUID": "F78641F74D1F4BD88C474DA99E64D8A3"
            },
            {
                "Name": "CNC-Desolation",
                "GUID": "640DB1EF43CD57A7D48947B224CB5994"
            },
            {
                "Name": "BH-Field",
                "GUID": "E77C0B224CC3BC92D802C487F1CA765A"
            },
            {
                "Name": "BH-Under",
                "GUID": "DB93F3DE455D80315D944EB1AA6A2441"
            },
            {
                "Name": "BH-LakeSide",
                "GUID": "693A10854316E1C2A38F40B8C4AC5DFB"
            }
        ],
        "Mutators": [
            {
                "Name": "Rx_WebMutator"
            },
            {
                "Name": "FPI_Mutator_RXSS"
            }
        ]
    }
]
```
