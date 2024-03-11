# Network creation
docker network create nuino_network

# The following two commands are to be run from within the workdir

# Running mongo container

docker run -itd --expose 27017 -p 127.0.0.1:27019:27017/tcp --env MONGO_INITDB_ROOT_USERNAME=root --env MONGO_INITDB_ROOT_PASSWORD=root
--network nuino_network --name nuino_mongo mongo:latest

# Running node container

docker run -itd -v $PWD:/app --expose 5000 -p 127.0.0.1:5001:5000/tcp --workdir /app --network nuino_network --name nuino_node node:18-alpine /bin/sh

# Setting up database access

docker exec -it nuino_mongo /bin/sh

mongo

use thetiptop
use admin

db.auth("root", passwordPrompt()) // root, root

db.createUser(
    {
        user: "App_user",
        pwd:  'App_password',   // or cleartext password
        roles: [ { role: "readWrite", db: "thetiptop" }]
    }
)


# Starting the application

## Connecting inside the container

docker exec -itu node nuino_node /bin/sh

## running the app

npm run start

