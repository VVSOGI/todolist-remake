# 투두리스트 카테고리 등록 프로세스

### 유스케이스 명: 투두리스트 카테고리 등록 (Post category)

**선행 조건**:

- 현재 없음.

**기본 흐름**:

1. 유저가 앱에 접속한다.
2. 원하는 투두리스트를 카테고리로 만든다.
3. 카테고리의 필수 정보를 담아야한다.
   - 타이틀 string & MinLength<3>
4. 프론트엔드는 필수 정보를 담아 백엔드에 요청을 보낸다.
5. 백엔드는 받은 데이터 처리 후 201 STATUS CODE를 반환한다.

**대안 흐름**:

**후행 조건**:

**특별 요구 사항**:

**비즈니스 규칙**:

```plantuml
@startuml
actor Customer
Customer -> Frontend: 앱 메인 페이지 입장 /
    Frontend -> Backend: 카테고리 생성 시 필요한 데이터 전송 POST /category
        Backend -> BoardController: POST /category
            BoardController -> BoardService: createCategory(title)
                BoardService -> DB: 필수 카테고리 데이터를 담아 DB에 생성 요청
                DB -> BoardService: 생성된 카테고리 데이터 제공
                BoardService -> BoardService: saveCategory(created)
                BoardService -> DB: 생성된 카테고리 데이터 저장 요청
                DB -> BoardService: 저장 성공
            Backend <-- BoardService: true
    Frontend <-- Backend: 201 STATUS CODE
Customer <- Frontend: 카테고리 리스트에 새로 생성한 카테고리가 추가된 화면
@enduml
```
