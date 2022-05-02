
# Activefence Drill TS





## Run Locally

Clone the project

```bash
  git clone https://github.com/ariyeb/activefence_drill_TS.git
```

Run Mongodb and RabbirMQ Containers from the root folder

```bash
  docker compose up
```

Install dependencies in all sub-folders:

```bash
  npm install
```
Populate the MongoDb with tasks, in the 'mongodb-populate' folder:
```bash
  npm start
```
Start all the services in the other sub folders:

```bash
  npm start
```
For horizontal scaling you can run 'tasks-distributer' and 'tasks-executer' in multiple terminals.


## API Reference

#### execute all tasks

```http
  PATCH http://localhost:3000/tasks/execute
```



