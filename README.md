# Frame-Frontend-Admin

## 설명(Explain)

Frame 관리자를 위한 어드민 사이트 입니다.

## 깃 커밋 규칙(git commit convention)

> ### 1. 기본적으로 commit message는 아래와 같이 제목, 내용으로 구성한다.

```
[type]: [content]
```

> ### 2. commit type

- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 문서 수정
- style: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- refactor: 코드 리팩토링
- test: 테스트 코드, 리팩토링 테스트 코드 추가
- chore: 빌으 업무 수정, 패키지 매니저 수정

> ### 3. content

- 내용은 60자를 넘기지 않는다.
- 무엇을 했는지를 기록한다.
- 과거시제를 사용하지 않고 명령어로 작성한다.
  - Fixed -> Fix
  - Added -> Add

## 기술 스택(skills)

> ### 언어(Language)

- TypeScript

> ### 프레임워크(Framework)

- Nuxt.js - Vue.js

> ### git flow

1. 자신의 Pull Request는 스스로 merge 합니다.
2. 머지가 완료된 feature 브랜치는 머지와 동시에 삭제합니다.

- master : 제품으로 출시될 수 있는 브랜치
- develop : 다음 출시 버전을 개발하는 브랜치
- feature : 기능을 개발하는 브랜치
- release : 이번 출시 버전을 준비하는 브랜치
- hotfix : 출시 버전에서 발생한 버그를 수정 하는 브랜치

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
