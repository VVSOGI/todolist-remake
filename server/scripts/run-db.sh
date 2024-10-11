#!/bin/bash
set -e
cd "$(dirname "$0")"
source ../.env

if [ -z "$(ls -A $DB_VOLUME_NAME)" ]; then
  echo "No data found in $DB_VOLUME_NAME. Initializing database."
  INIT_DB=true
else
  INIT_DB=false
fi

if [ "$INIT_DB" = true ]; then
  docker run \
    --name $DB_CONTAINER_NAME \
    --network sniff-step \
    -e POSTGRES_PASSWORD=$DB_PASSWORD \
    -e POSTGRES_USER=$DB_USERNAME \
    -e POSTGRES_DB=$DB_DATABASE \
    -v $DB_VOLUME_NAME:/var/lib/postgresql/data \
    -d postgres
else
  docker run \
    --name $DB_CONTAINER_NAME \
    --network sniff-step \
    -e POSTGRES_PASSWORD=$DB_PASSWORD \
    -e POSTGRES_USER=$DB_USERNAME \
    -e POSTGRES_DB=$DB_DATABASE \
    -v $DB_VOLUME_NAME:/var/lib/postgresql/data \
    -d postgres
fi

echo "Waiting for PostgreSQL server [$DB_CONTAINER_NAME] to start."
while ! docker exec $DB_CONTAINER_NAME pg_isready -U $DB_USERNAME -d $DB_DATABASE -h localhost >/dev/null 2>&1; do
  echo "PostgreSQL is unavailable - sleeping"
  sleep 1
done

echo "PostgreSQL is up - executing command"
docker exec -i $DB_CONTAINER_NAME psql -U $DB_USERNAME -d $DB_DATABASE -c '\dt'
