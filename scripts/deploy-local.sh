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

    docker cp ../temp/dump.sql $DB_CONTAINER_NAME:/home/
    docker exec $DB_CONTAINER_NAME psql -U $DB_USERNAME -d $DB_CONTAINER_NAME -f /home/dump.sql
}

docker network create $DOCKER_NETWORK || true

cat ../envs/.client.env ../envs/.server.env ../envs/.infra.env  > ../.env
cat ../envs/.server.env ../envs/.infra.env > ../packages/server/.env
cat ../envs/.client.env > ../packages/client/.env

sudo mkdir -p $DB_VOLUME_NAME/data
sudo chown -R $USER $DB_VOLUME_NAME

docker-compose -f ../docker-compose.yml --profile infra up -d
infra_setting
docker-compose -f ../docker-compose.yml --profile services up -d
