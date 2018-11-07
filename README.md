# Karma QUnit Test (Karma 테스트 러너)
> 유닛 테스트(unit test)는 컴퓨터 프로그래밍에서 소스 코드의 특정 모듈이 의도된 대로 정확히 작동하는지 검증하는 절차다. 즉, 모든 함수와 메소드에 대한 테스트 케이스(Test case)를 작성하는 절차를 말한다. 이를 통해서 언제라도 코드 변경으로 인해 문제가 발생할 경우, 단시간 내에 이를 파악하고 바로 잡을 수 있도록 해준다. 이상적으로, 각 테스트 케이스는 서로 분리되어야 한다. 이를 위해 가짜 객체(Mock object)를 생성하는 것도 좋은 방법이다. 유닛 테스트는 (일반적인 테스트와 달리) 개발자(developer) 뿐만 아니라 보다 더 심도있는 테스트를 위해 테스터(tester)에 의해 수행되기도 한다.

## Command Line
터미널에서 커맨드 라인 명령어 실행

### 카르마 karma.conf.js 파일 생성 명령어
(옵션 선택은 방향키로 변경)
``` bash
karma init
```

### karma.conf.js 파일 생성 시 설정 질의
``` bash
which testing framework do you want to use ?
(어떤 테스팅 프레임워크를 사용할 것인가?)
Press tab to list possible options. Enter to move to the next question.
> jasmine

Do you want to use Require.js ?
(Require.js 를 사용할 것인가?)
This will add Require.js plugin.
Press tab to list possible options. Enter to move to the next question.
> no

Do you want to capture any browsers automatically ?
(어떤 브라우저 환경에서 테스트할 것인가?)
Press tab to list possible options. Enter empty string to move to the next     question.
> Chrome
>

What is the location of your source and test files ?
(테스트 대상과 테스트 스펙 파일에 대한 위치)
You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".
Enter empty string to move to the next question.
>

Should any of the files included by the previous patterns be excluded ?
You can use glob patterns, eg. "**/*.swp".
(테스트할 파일들중 제외할 파일들에 대한 패턴)
Enter empty string to move to the next question.
>

Do you want Karma to watch all the files and run the tests on change ?
(파일이 변경되었을 때 자동으로 테스트를 실행할 것인가?)
Press tab to list possible options.
> yes
```

### 카르마 실행 명령어
``` bash
npm run karma start
```
or
``` bash
npm run start
```