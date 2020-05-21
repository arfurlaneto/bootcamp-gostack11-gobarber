# 🪒 GoBarber
A barber appointment app developed at Rocketseat's GoStack Bootcamp.

## Back-end
You will need to set up PostgreSQL, MongoDB and Redis instances. They can be installed using docker:
```bash
docker run --name gobarber_pg -e POSTGRES_DB=gobarber -e POSTGRES_PASSWORD=docker -p 5432:5432 -d -t postgres:11
docker run --name gobarber_mongo -p 27017:27017 -d -t mongo
docker run --name gobarber_redis -p 6379:6379 -d -t redis:alpine
 ```
 After you got your instances, you will need to create some environment files.
 Create `.env` and a `ormconfig.json` under `backend` folder. Use `.env.example` and `ormconfig.json.example` as examples.
 
 If you used docker commands above, you are good with defaults. Otherwise, edit the files with your configurations.
 
 Now you can make it run:
 ```bash
 # install dependencies
 yarn
 
 # run database migrations
 yarn typeorm migration:run
 
 # start the server
 yarn run start
 ```
Back-end will be running at port 3333.
 
