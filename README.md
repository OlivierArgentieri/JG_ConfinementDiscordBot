# Jamy Gourmaud Confinement Discord Bot 

Just a discord bot to not miss any video of Jamy Gourmaud confinement

## Getting Started

- MongoDB BDD : To store videos already posted.
- Twitter Developer account : to get Twitter credentials API.

### Prerequisites

Create a JSON file name config.js to create configuration

```
{
  "bot": {
    "token": "<token_discord_bot>",
    "clientSecret": "<client_secret>",
    "clientID": "<client_id>",
    "playedGame": "<display_text_played_game>"
  },
  "twitter_credentials": {
    "consumer_key": "<api_key>",
    "consumer_secret": "<api_secret_key>",
    "access_token_key": "<access_token>",
    "access_token_secret": "<token_secret>"
  },
  "channel": {
    "jamyChannel": "<jamy_post_channel_id>"
  },
  "MongoDB": {
    "username": "<bdd_username>",
    "password": "<bdd_password>",
    "urlBDD": "<bdd_url>",
    "nameBDD": "<bdd_name>",
    "collectionName": "<bdd_collection_name>"
  }
}
```

## Built With

* [NodeJs](https://nodejs.org/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

