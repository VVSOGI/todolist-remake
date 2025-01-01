#!/bin/bash
set -e
cd "$(dirname "$0")"
source ../envs/.client.env
source ../envs/.server.env

case "$(uname -s)" in
    Darwin*)    # macOS
        if [ -S "/Users/$USER/.docker/run/docker.sock" ]; then
            export DOCKER_HOST="unix:///Users/$USER/.docker/run/docker.sock"
        else
            export DOCKER_HOST="unix:///var/run/docker.sock"
        fi
        ;;
    Linux*)     # Linux
        export DOCKER_HOST="unix:///var/run/docker.sock"
        ;;
esac


export DB_CONTAINER_NAME=$DB_CONTAINER_NAME
export DB_PORT=$DB_PORT
export DB_PASSWORD=$DB_PASSWORD
export DB_USERNAME=$DB_USERNAME
export DB_DATABASE=$DB_DATABASE
export DB_VOLUME_NAME=$DB_VOLUME_NAME

export NEXT_PUBLIC_BACKEND_SERVER_URL=$NEXT_PUBLIC_BACKEND_SERVER_URL
export SERVICE_FRONTEND_CONTAINER_NAME=$SERVICE_FRONTEND_CONTAINER_NAME
export CLIENT_PORT=$CLIENT_PORT

export RUN_ENVIRONMENT=$RUN_ENVIRONMENT
export SERVER_PORT=$SERVER_PORT
export LOCAL_HOST=$LOCAL_HOST
export DOCKER_HOST=$DOCKER_HOST
export CLIENT_URL=$CLIENT_URL
export DOCKER_NETWORK=$DOCKER_NETWORK
export SERVICE_BACKEND_CONTAINER_NAME=$SERVICE_BACKEND_CONTAINER_NAME

docker network create todolist || true

cat ../envs/.client.env ../envs/.server.env > ../.env

docker-compose -f ../docker-compose.yml --profile infra up -d
rm ../.env
