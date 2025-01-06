#!/bin/bash
set -e
cd "$(dirname "$0")"
source ../envs/.server.env
source ../envs/.infra.env

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
}
docker network create $DOCKER_NETWORK || true

cat ../envs/.client.env ../envs/.server.env ../envs/.infra.env  > ../.env
cat ../envs/.server.env ../envs/.infra.env > ../server/.env
cat ../envs/.client.env > ../client/.env

sudo mkdir -p $DB_VOLUME_NAME/data
sudo chown -R $USER $DB_VOLUME_NAME

docker-compose -f ../docker-compose.yml --profile infra up -d
infra_setting
docker-compose -f ../docker-compose.yml --profile services up -d
