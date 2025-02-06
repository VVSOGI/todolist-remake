### How to use

There are two ways to use it. There is asimple way to run it with docker, and
a way to run development mode with workspace.

### Running with docker

Let's start assuming you have docker and docker compose.

1. cd todolist (/root)
2. in the terminal, type "bash scripts/deploy-local.sh"
3. from this point on, it will automatically proceed to docker.
4. verify with "docker ps" when everything is done.
5. container should have client, server, postgres, stories
6. access with browser "localhost:3001"

Everything is written so that you just need to run the script and it will work automatically.

### Running with Workspace

Workspace should have yarn.

1. cd todolist (/root)
2. type "yarn" in the terminal to install the library
3. type "yarn infra-up" in the terminal
4. type "yarn server:dev" in the terminal
5. type "yarn client:dev" in the terminal

This will allow you to access the basic services in development mode. We haven't written a separate command for the stories service yet, but if you want to access it as a workspace,

you can type "yarn workspace @todolist/stories storybook" in the terminal.
