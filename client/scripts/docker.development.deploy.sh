#!/bin/bash
set -e
cd "$(dirname "$0")"
source ../.env

NEW_VALUE="http://backend:3000"
ENV_FILE="../.env"

if [ -f "$ENV_FILE" ]; then
    sed -i "s#^NEXT_PUBLIC_BACKEND_URL=.*#NEXT_PUBLIC_BACKEND_URL=$NEW_VALUE#" $ENV_FILE
    
    if [ $? -eq 0 ]; then
        echo “Environment variables were updated successfully.”
        grep "NEXT_PUBLIC_BACKEND_URL" $ENV_FILE
    else
        echo “An error occurred while updating environment variables.”
        exit 1
    fi
else
    echo “.env file not found.”
    exit 1
fi

yarn build
yarn start
