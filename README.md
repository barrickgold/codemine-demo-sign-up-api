# CodeMine Demo Sign Up API

## Running
Copy `.env.example` to `.env` (git ignored by default) and make changes to it for your local stack.

### First Time Set up
To pull in the dependencies, you need to install the app first
```
npm install
```

### Database
For development purposes, we start our database stack with `docker-compose`. This will start a PostgreSQL instance and a PGAdmin4 (web ui) instance. The values you specify in your `.env` file will become the values PostgreSQL and PGAdmin4 operate with.

```
docker-compose up -d
```

With default values, the script above starts PostgreSQL on port `5432` and PGAdmin4 on port `8000`. You can access the PGAdmin4 Web UI via `http://localhost:8000`. Username and password can be found in your `.env` file.

If you are using PGAdmin4 for the first time (or after removing the volume), you have to log in again and set up your servers. To do that, right-click `Servers`, `Create` -> `Server...`. Give the server a name (such as `local`), go to the `Connection` tab and enter `db` as the `Host name/address`. Finally, the `Maintenance database`, `Username`, and `Password` are the same as your PostgreSQL values in your `.env` file.


### Creating tables and seeding data

Table structure is set up through Sequelize, you will need to run the following to ensure the schema.

Apply migrations and seed data:
```
npm run db:migrate
npm run db:seed
```
## Start the app
Finally, to start the application
```
npm start
```


## Stopping

### Database
To stop both, PostgreSQL database and PGAdmin4 run the following script.

```
docker-compose down
```

#### Hard Reset
To completely remove a docker volume (such as your database file), stop your docker instances (as above) and run:

```
# list all volumes
docker volume ls

# remove volume
docker volume rm <your project name>_pgadmin
```

## Tooling
- Docker
