### 스크립트 동작 원리

root/scripts에 있는 스크립트들은 도커를 이용한 shell scripts입니다. 이 스크립트는 다른 개발자가 프로젝트에 참여한다고 가정하고 작성한 스크립트입니다. 개인적으로 프로젝트에 참여할 때 개발모드를 어떻게 켜야하는지, 개발 환경에 필요한 변수들은 뭐가 있는지 등등을 먼저 파악한 후 개발모드로 들어가서 하나씩 코드를 만져보면서 프로젝트의 설계를 파악합니다. 다른 개발자분들도 비슷하게 작업을 하실 거라 생각하기에 개발자 편의성을 높이기 위해서 항상 scripts를 작성하고있습니다.

deploy-local.sh은 docker 컨테이너 기반으로 빠르게 현재 웹앱의 구성이 어떻게 되는지를 알 수 있고, 어떠한 환경에서도 도커만 있으면 안정적이게 프로젝트를 볼 수가 있습니다. 제가 도커를 사용하는 가장 주된 이유는 환경에 구애받지 않기 위해서인데 이런 식으로 스크립트를 작성해놓으면 제가 사용하는 개발 기기가 변경되어도 도커만 설치하고 스크립트를 돌리면 빠르게 개발 환경에 접근할 수 있습니다.

물론 외부에서 코드를 수정해도 컨테이너 내부의 코드가 수정되는게 아니라 완벽한 개발 모드라고 보기에는 어렵지만, client의 간단한 코드 수정 및 확인에있어서 서버와 데이터베이스에 접근해야하기 때문에 필요한 경우 client 컨테이너를 제거한 후 yarn client:dev를 입력해서 개발모드 수정하면 프론트엔드 개발자는 인프라의 구애를 받지 않고 작업을 할 수 있습니다.

### 코드

현재 deploy-local을 보면 아래와 같은 코드가 있습니다.

```bash
infra_setting() {
    while ! docker exec $DB_CONTAINER_NAME pg_isready -U $DB_USERNAME -d $DB_DATABASE -h localhost >/dev/null 2>&1; do
        echo "PostgreSQL is unavailable - sleeping"
        sleep 1
    done

    docker cp ../temp/dump.sql $DB_CONTAINER_NAME:/home/
    docker exec $DB_CONTAINER_NAME psql -U $DB_USERNAME -d $DB_CONTAINER_NAME -f /home/dump.sql
    docker exec -it $DB_CONTAINER_NAME psql -U $DB_USERNAME -d $DB_DATABASE -c "ALTER USER $DB_USERNAME WITH PASSWORD '$DB_PASSWORD'"
}
```

이 작업은 db에 dump파일을 덮어씌우는 작업입니다. 완전히 새로운 환경에서는 db에 매핑할 볼륨이 존재하지 않기 때문에 그 상황을 가정하여 작성된 코드입니다. dump.sql은 간단한 데이터들이 들어있기 때문에 보안상의 문제가 되지않는다는 판단하에 작성되었습니다.

하지만 프로덕션 환경에서 앱을 켜야할때는 dump 데이터가 필요하지 않고 초기화 되어있는 db가 필요하기 때문에 infra_setting 함수의 코드가 약간 다릅니다.

```bash
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
```

위와같이 프로덕션 환경에서는 dump 파일을 사용하지 않고 migration을 진행합니다. 따라서 해당 작업이 완료되면 처음에는 데이터가 존재하지 않습니다.

### Reset

reset.sh은 현재 존재하는 todolist 관련 모든 컨테이너들을 제거하고 도커에 cache를 전부 제거합니다. 무언가를 제거하는 작업은 신중하게 이루어져야 하기 때문에 confirm에 대한 코드가 작성되어 있습니다.

```bash
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
```

이 코드는 실수로 reset.sh를 실행하는 경우를 막아줄 수 있습니다.
