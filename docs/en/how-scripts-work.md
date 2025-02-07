### How scripts work

The scripts in root/scripts are shell scripts using Docker. These scripts are written with the assumption that other developers will join the project. When I personally join a project, I first understand how to turn on development mode, what variables are needed in the development environment, and then enter development mode and touch the code one by one to understand the design of the project. I

'm sure other developers do the same thing, so I'm always writing scripts to make it easier for developers

. The deploy-local.sh is based on the docker container, so I can quickly see what the current webapp configuration is, and I can reliably view the project in any environment with just docker. The main reason I use docker is to be environment agnostic, and by writing my scripts this way, even if my development device changes, I can just install docker, run the script, and quickly access my development environment.

Of course, modifying the code externally does not modify the code inside the container, so it's not a perfect development mode, but for simple code modification and verification of the client, I need to access the server and database, so if necessary, I can remove the client container and type yarn client:dev to modify the development mode, and the front-end developer can work without being infrastructure agnostic.

### Code

If we look at the current deploy-local, we have the following code.

```bash
infra_setting() {
    while ! docker exec $DB_CONTAINER_NAME pg_isready -U $DB_USERNAME -d $DB_DATABASE -h localhost >/dev/null 2>&1; do
        echo "PostgreSQL is unavailable - sleeping"
        sleep 1
    done

    docker cp ../temp/dump.sql $DB_CONTAINER_NAME:/home/
    docker exec $DB_CONTAINER_NAME psql -U $DB_USERNAME -d $DB_CONTAINER_NAME -f /home/dump.sql
    docker exec -it $DB_CONTAINER_NAME psql -U $DB_USERNAME -d $DB_DATABASE -c "ALTER USER $DB_USERNAME WITH PASSWORD '$DB_PASSWORD'"
}
```

This operation overwrites the DB with a dump file. In a completely new environment, there is no volume to map to the DB, so this code is written assuming that situation. Since dump.sql contains simple data, it is not a security issue.

However, when you need to turn on the app in production, you don't need dump data, but you need an initialized DB, so the code of the infra_setting function is slightly different.

```bash
infra_setting() {
    while ! docker exec $DB_CONTAINER_NAME pg_isready -U $DB_USERNAME -d $DB_DATABASE -h localhost >/dev/null 2>&1; do
        echo "PostgreSQL is unavailable - sleeping"
        sleep 1
    done

    docker exec $SERVICE_BACKEND_CONTAINER_NAME /bin/bash -c '
        counter=0
        while ! { [ -f ./dist/database/data-source.js ] || [ -f /app/dist/database/data-source.js ]; } && [ $counter -lt 30 ]; do
            echo "Waiting for data-source.js to be created..."
            sleep 2
            counter=$((counter + 1))
        done
        if ! { [ -f ./dist/database/data-source.js ] || [ -f /app/dist/database/data-source.js ]; }; then
            echo "Timeout waiting for data-source.js"
            exit 1
        fi
    '

    docker exec $SERVICE_BACKEND_CONTAINER_NAME yarn migration:show
    docker exec $SERVICE_BACKEND_CONTAINER_NAME yarn migration:run
    docker exec $SERVICE_BACKEND_CONTAINER_NAME yarn migration:show
    docker exec -i $DB_CONTAINER_NAME psql -U $DB_USERNAME -d $DB_DATABASE -c '\dt'
```

As shown above, in a production environment, the migration is done without using a dump file, so when it's done, the data doesn't exist initially.

### Reset

reset.sh removes all currently existing todolist-related containers and clears all cache in the docker. Removing something should be done carefully, which is why the code is written for confirm.

```bash
confirm_reset() {
    while true; do
        read -p "Are you sure you want to delete all Docker containers and environment variables? (yes/no) " yn
        case $yn in
            [Yy]* ) return 0;;
            [Nn]* ) return 1;;
            * ) echo "Sorry, please answer yes or no.";;
        esac
    done
}
```

This code can prevent you from accidentally running reset.sh.
