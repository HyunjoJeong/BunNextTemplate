## Project Introduction

- 소소하지만 유용한, "소용"은
- 이름 그대로 일상에서 자주 쓰이는 기능들을 한 군데로 모은 종합 도우미 웹 앱입니다.

## Conventions

#### Coding Convention

- `변수`: camelCase
- `클래스`: PascalCase

#### Commit Message Convention

- `feat`: 새로운 기능 추가 및 변화된 요구사항에 따른 기존 기능 수정
- `fix`: 버그로 인한 코드 수정
- `doc`: 문서 및 주석 수정 (eg. README)
- `css`: css 작업
- `pkg`: package.json 변경
- `refactor`: 코드 리팩터링 (eg. 네이밍 변경 및 줄바꿈 등 기능과 상관없는 코드 수정)
- `ci`: CI/CD 관련 설정 수정
- `etc`: 이외 기타 사항 (상세히 기술)

## Tips

- commit message 변경: '.husky/commit-msg'에서,, 'README' 파일도 업데이트 할 것.
- src 아래에 폴더 추가시: 'tsconfig.json' 에서도 path 추가 할 것.

## Tech Spec

- FrontEnd: Next(v13.5.6), React(v18.2.0), Emotion
- BackEnd:
- DB:
- CI/CD:
- etc: Bun(v1.0.14), Husky
