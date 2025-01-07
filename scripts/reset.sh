#!/bin/bash
set -e
cd "$(dirname "$0")"

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
docker rm -f frontend backend postgres
docker system prune -a -f

echo "The reset task is done."
