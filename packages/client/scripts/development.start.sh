#!/bin/bash
set -e
cd "$(dirname "$0")"

cat ../.env.example > ../.env
yarn next dev --port 3001