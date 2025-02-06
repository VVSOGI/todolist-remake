### 사용법

사용법은 두 가지로 나뉩니다. 도커로 간단하게 실행하는 방법이 있고,
workspace로 개발 모드를 실행하는 방법이 있습니다.

### 도커로 실행하기

도커와 도커 컴포즈가 있다는 가정하에 시작하겠습니다.

1. cd todolist (/root)
2. 터미널에 "bash scripts/deploy-local.sh"
3. 이때부터는 자동으로 도커로 진행됩니다.
4. 모든 작업이 완료되면 "docker ps"로 확인.
5. 컨테이너가 client, server, postgres, stories가 있어야 합니다.
6. 브라우저 "localhost:3001"로 접근

모든 과정은 스크립트만 실행하면 자동으로 동작하게 작성되어있으니 편하게 사용할 수 있습니다.

### Workspace로 실행하기

Workspace는 yarn이 있어야 합니다.

1. cd todolist (/root)
2. 라이브러리 설치를 위해 터미널에 "yarn" 입력
3. 터미널에 "yarn infra-up" 입력
4. 터미널에 "yarn server:dev" 입력
5. 터미널에 "yarn client:dev" 입력

이렇게 하면 기본적인 서비스들을 development 모드로 접근이 가능합니다.
stories 서비스는 아직 따로 명령어를 작성하지 않았는데, 만약 workspace로 접근을 원한다면
터미널에 "yarn workspace @todolist/stories storybook" 입력을 해주면 접근할 수 있습니다.
