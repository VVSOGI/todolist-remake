#!/bin/bash
set -e
cd "$(dirname "$0")"
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
    CYGWIN*|MINGW32*|MSYS*|MINGW*)  # Windows
        export DOCKER_HOST="npipe:////./pipe/docker_engine"
        ;;
    *)
        echo "Unsupported operating system"
        exit 1
        ;;
esac

docker network create todolist || true

cat ../envs/.client.env ../envs/.server.env ../envs/.infra.env  > ../.env
cat ../envs/.server.env ../envs/.infra.env > ../server/.env
cat ../envs/.client.env ../envs/.infra.env > ../client/.env

docker-compose -f ../docker-compose.yml --profile infra up -d
docker-compose -f ../docker-compose.yml --profile services up -d