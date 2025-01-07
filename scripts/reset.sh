#!/bin/bash
set -e
cd "$(dirname "$0")"
source ../envs/.server.env
source ../envs/.infra.env

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

if ! confirm_reset; then
    echo "The task was canceled."
    exit 1
fi

echo "The reset task is going."

rm ../.env ../packages/client/.env ../packages/server/.env || true
docker rm -f $SERVICE_FRONTEND_CONTAINER_NAME $SERVICE_BACKEND_CONTAINER_NAME $DB_CONTAINER_NAME
docker system prune -a -f

echo "The reset task is done."
