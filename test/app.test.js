/**
 * QUnit.test()
 * 테스트할 때 사용하는 함수
 */

// 일반 테스트 검증
QUnit.test('일반 테스트 입니다.', function(assert) {
    // 참, 거짓 비교
    assert.ok(1 === 1, 'Passed!');
    assert.notOk(1 === '1', 'Passed!');

    // 두 값이 같은지 비교
    assert.equal(1 + 1, 2, 'Passed!');
    assert.notEqual(1 + 1, '3', 'Passed!');

    // 두 값이 같은지 타입까지 비교
    assert.strictEqual(1 + 1, 2, 'Passed');
    assert.notStrictEqual(1 + 1, '2', 'Passed');

    // 객체나 배열인 경우 내부 요소를 재귀적으로 두 값이 같은지 타입까지 비교
    assert.deepEqual({a: 1}, {a: 1}, 'Passed!');
    assert.notDeepEqual({a: 1}, {a: '1'}, 'Passed!');
});

// 비동기 테스트 검증
QUnit.test('비동기 테스트 입니다.', function(assert) {
    var done = assert.async();

    setTimeout(function() {
        assert.ok(true, '성공');
        done(); // done이 불렸을 때 테스트의 끝으로 확인
    }, 10);
});

// test 함수안에 실행할 단언문의 개수를 사전에 정의 검증
QUnit.test('비동기 테스트 입니다.', function(assert) {
    assert.expect(1);
    assert.ok(true, '성공');
});

// 예제
QUnit.test('세자리 이하인 경우는 매개변수를 바로 반환한다', function(assert) {
    assert.equal(setComma(1), 1, '한자리는 바로 반환된다.');
    assert.equal(setComma(12), 12, '두자리는 바로 반환된다.');
    assert.equal(setComma(123), 123, '세자리는 바로 반환된다.');
    assert.equal(setComma(1234), '1,234', '세자리가 넘는 경우 콤마를 표시한다.');
});

/**
 * QUnit.module()
 * 테스트가 많을 경우 test를 그룹핑 짓기 위해 사용하는 함수
 */

QUnit.module('모듈1');
QUnit.test('ok 테스트 입니다.', function(assert) {
    assert.ok(true, '성공');
});

QUnit.test('false 테스트 입니다.', function(assert) {
    assert.notOk(false, '실패');
});

QUnit.module('모듈2');
QUnit.test('ok 테스트 입니다.', function(assert) {
    assert.expect(2);
    assert.ok(true, '성공');
    assert.ok(true, '성공');
});

QUnit.module('module A', {
    beforeEach: function() {
        function Maker() {}

        this.maker = new Maker();
        this.parts = ['wheels', 'motor', 'chassis'];
    }
});

QUnit.test('robot 배열 추가 입니다.', function(assert) {
    this.parts.push('arduino');
    assert.ok(true, '성공');
});

QUnit.log(function(details) {
    console.log('Log: ', details.result, details.message);
});