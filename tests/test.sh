#!/usr/bin/env bash

HOST=localhost                  # name of HOST at which your server is running
PORT=3000                       # PORT on which your server is listening

curl -XGET "$HOST:$PORT"
curl -XPOST "$HOST:$PORT"
curl -XPUT "$HOST:$PORT"
curl -XDELETE "$HOST:$PORT"