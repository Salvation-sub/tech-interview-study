# `함수 🔥`

## 자바스크립트에서 함수를 정의하는 방법은 몇가지가 있나요?

1. 함수 선언문
2. 함수 표현식
3. Function 생성자 함수
4. 화살표 함수 (ES6)

```jsx
case 1 :함수 선언문

function add(x,y){
  return x+y;
}

case 2: 함수 표현식
var add = function(x,y){
  return x + y;
}

case 3: Function 생성자 함수
var add = new Function('x','y', 'return x+y');

case 4: 화살표 함수(ES6)
var add = (x,y) => x+y;
```

## 함수 선언문과 함수 표현식은 어떤 차이가 있나요?

> **함수 선언문**은 런타임 환경에서 이미 함수 객체가 생성되어 있고 함수 이름과 동일한 식별자에 할당까지 완료된 상태이기에 소스코드가 평가되고 실행되기 이전에 함수를 참조/호출 할 수 있다.

**함수 표현식**은 var같은 변수 키워드로 할당되기에 런타임에서 호이스팅에 의해 undefined로 초기화 되고 평가 되기에 아래와 같이 TypeError를 내뱉게 된다.

>

```jsx
// 함수 참조
console.dir(add); // ƒ add(x, y)
console.dir(sub); // undefined

// 함수 호출
console.log(add(2, 5));
// 7 why? 함수 선언문은 표현식이 아닌 문으로, 런타임 이전에 js 엔진에 의해 실행된다.

console.log(sub(2, 5));
// TypeError: sub is not a function, why? 함수 표현식(표현식인 문)은 런타임에 값을 할당하기 때문에 sub는 현재 undefined로만 초기화된 상태이다.

// ① 함수 선언문
function add(x, y) {
  return x + y;
}

// ② 함수 표현식
var sub = function (x, y) {
  return x - y;
};
```

## 즉시 실행 함수(IIFE)에 대해 알고 있나요? 알고 있다면 아는 내용에 대해 말해보세요

> **함수 정의와 동시에 즉시 호출되는 함수를 즉시 실행 함수**라고 하며 , 즉시 실행 함수는 단 한번만 호출되며 다시 호출 할 수 없다.
