# `데이터 타입 🔥`

1. 데이터 타입의 종류는 어떤 것들이 있나요? 🔥

- 숫자(number): 숫자, 정수와 실수 구분 없이 하나의 숫자 존재
- 문자열(string): 문자열
- 불리언(boolean): 논리적 참(true)과 거짓(false)
- undefined: var키워드로 선언된 변수에 암묵적으로 할당되는 값
- null: 값이 없다는 것을 의도적으로 명시할 때 사용하는 값
- 심벌(symbol): ES6에서 추가된 7번째
- BigInt: 길이의 제약 없이 정수를 다룰 수 있게 해주는 숫자형
- 객체: Object
- 배열: Array
- 함수: Function

2. 심벌 타입은 뭐죠?

- 심벌은 ES6에서 추가된 7번째 타입으로, 변경 불가능한 원시 타입의 값이다. 심벌 값은 다른 값과 중복되지 않는 유일무이한 값이다. 따라서 주로 이름이 충동할 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용한다.

```js
const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol("foo");
const sym4 = Symbol("foo");

console.log(sym1 === sym1); // true

console.log(sym1 === sym2); // false
console.log(sym3 === sym4); // false
```

- 자바스크립트에는 심볼을 키값으로 갖고 있는 iterator 객체를 자체적으로 내장하고 있다. 심볼 이터레이터를 갖고 있는 메소드만 for..of 같은 문법을 사용할 수 있다.

```js
Array.prototype[Symbol.iterator];

String.prototype[Symbol.iterator];

Map.prototype[Symbol.iterator];

Set.prototype[Symbol.iterator];

arguments[Symbol.iterator];

NodeList.prototype[Symbol.iterator];

HTMLCollection.prototype[Symbol.iterator];
```

3. 데이터 타입은 왜 필요할까요? 🔥

- 값을 저장할 때 확보해야 하는 메모리 공간의 크기를 결정하기 위해
- 값을 참조할 때 한 번에 읽어 들여야 할 메모리 공간의 크기를 결정하기 위해
- 메모리에서 읽어 들인 2진수를 어떻게 해석할지 결정하기 위해

4. 정적 타이핑이 뭔가요?

- 정적 타이핑은 컴파일시 타입 에러를 내는것을 의미한다. 기본적으로 c, java가 정적 타이핑을 사용하고 있으며 타입스크립트 또한 정적 타이핑을 지원하고 있다.
- 보통 변수를 선언할 때 먼저 타입을 선언하는 것을 의미한다.

5. 동적 타이핑이 뭔가요?

- 변수를 선언할 때 타입을 따로 선언하지 않고 자바스크립트에서는 let,var,const로 대체한다.
- 보통 변수의 선언이 아닌 할당에 의해 타입추론이 이루어지고 변수를 재할당할시 언제든지 동적으로 타입이 변할 수 있다.
- 동적 타이핑은 런타임에서 에러를 낸다.

# `타입변환과 단축 평가 🔥`

1. 명시적 타입 변환이 뭔가요?

- 자바스크립트의 모든 값은 타입이 있다. 값의 타입은 개발자의 의도에 따라 다른 타입으로 변환할 수 있다. 개발자가 의도적으로 값의 타입을 변환하는 것을 명시적 타입 변환 또는 타입 캐스팅이라 한다.

```js
var x = 10;

// 숫자를 문자열로 타입 캐스팅한다.
var str = x.toString();
console.log(typeof str, str); // string 10

// x 변수의 값이 변경된 것은 아니다.
console.log(typeof x, x); // number 10
```

2. 명시적 타입 변환 함수를 예를 들어볼 수 있나요?

- 문자열

```js
// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
String(1); // -> "1"

// 2. Object.prototype.toString 메서드를 사용하는 방법
(1).toString(); // -> "1"

// 3. 문자열 연결 연산자를 이용하는 방법
1 + ""; // -> "1"
```

- 숫자형

```js
// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
Number("0"); // -> 0

// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
parseInt("0"); // -> 0

// 3. + 단항 산술 연산자를 이용하는 방법
+"0"; // -> 0

// 4. * 산술 연산자를 이용하는 방법
"0" * 1; // -> 0
```

3. 암묵적 타입 변환이 뭔가요?

- 개발자의 의도와는 상관없이 표현식을 평가하는 도중에 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되기도 한다. 이를 암묵적 타입 변환 또는 강제 타입 변환이라 한다.

```js
var x = 10;

// 문자열 연결 연산자 ( + )는 숫자 타입 x의 값을 바탕으로 새로운 문자열을 생성한다.
var str = x + "";
console.log(typeof str, str); // string 10

// x 변수의 값이 변경된 것은 아니다.
console.log(typeof x, x); // number 10
```

4. truthy / falsy 한 값이 뭔가요?

- 자바스크립트에서 제어문의 조건식 같은 환경에서 불리언 값을 truthy , falsy 값으로 평가되어 true, false로 암묵적 타입 변환이 된다.

```js
false
undefined
null
0, -0
NaN
' '(빈 문자열)
```
