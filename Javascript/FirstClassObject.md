# `함수와 일급 객체 🔥`

## 일급 객체가 뭔가요?

> '일급' 이란 뜻은 일급 시민 처럼 무슨 혜택을 받는 다는 뜻이 아니라, **사용할 때 다른 요소들과 아무런 차별이 없다는 것을 뜻한다.**

보통 일급 객체를 아래 3가지 조건을 총족한 객체를 일컫는다.

1. 모든 일급 객체는 **변수나 데이터에 담을 수 있어야 한다.**

```js
const hello = function () {
  console.log("Hello World");
};
```

2. 모든 일급 객체는 **함수의 파라미터로 전달 할 수 있어야 한다.**

```js
const hello = function () {
  console.log("Hello World");
};

function print(func) {
  func();
}

print(hello);
```

3. 모든 일급 객체는 **함수의 리턴값으로 사용할 수 있어야 한다.**

```js
const hello = function () {
  console.log("Hello World");
  return function () {
    console.log("Hello World 22");
  };
};

const hello2 = hello();
hello2();
```

## 자바스크립트에서 함수가 일급 객체라면, 일급 객체로 뭘 할 수 있나요?

일급 객체로서 함수가 가지는 가장 큰 특징은 일반 객체와 같이 함수의 매개변수에 전달할 수 있으며, 함수의 반환값으로 사용할 수도 있다는 것이다. 이는 함수형 프로그래밍을 가능케 하는 자바스크립트의 장점 중 하나이다.

## 꼬리 질문) 함수형 프로그래밍이 뭔가요? 🔥🔥

외부 상태를 변경하지 않고 외부 상태에 의존하지도 않는 함수를 순수 함수 라 한다. 순수 함수를 통해 부수효과를 최대한 억제하여 오류를 피하고 프로그램의 안전성을 높이려는 프로그래밍 패러다임 을 함수형 프로그래밍 이라 한다.

## 꼬리 질문) 순수 함수가 뭔가요? 일반 함수와는 어떤 차이가 있죠? 🔥🔥

- 순수 함수: 어떤 외부 상태에 의존하지도 않고 변경하지도 않는, 즉 부수 효과가 없는 함수를 순수 함수라 한다.

```js
let count = 0; //현재 카운트를 나타내는 상태

//순수함수 increase는 동일한 인수가 전달되면 언제나 동일한 값을 반환한다.
function increase(n) {
  return ++n;
}
//순수함수가 반환한 결과값을 변수에 재할당해서 상태를 변경.
count = increase(count);
console.log(count); //1;
count = increase(count);
console.log(count); //2;
```

- 비순수 함수: 외부 상태에 의존하거나 외부 상태를 변경하는, 즉 부수 효과가 있는 함수를 비순수 함수라고 한다.

```js
let count = 0; //현재 카운트를 나타내는 상태 :increase에 의해 변화한다.

//비순수함수
function increase() {
  return ++count; // 외부상태에 의존하며 외부상태를 변경.
}
//비순수함수는 외부상태(count)를 변경하므로 상태변화를 추적하기 어려워짐.
increase();
console.log(count); //1;
increase();
console.log(count); //2;
```

# Reference

- https://inpa.tistory.com/entry/CS-%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB-%EC%9D%BC%EA%B8%89-%EA%B0%9D%EC%B2%B4first-class-object
- https://github.com/junh0328/prepare_frontend_interview/blob/main/js.md#%EC%83%9D%EC%84%B1%EC%9E%90-%ED%95%A8%EC%88%98%EC%97%90-%EC%9D%98%ED%95%9C-%EA%B0%9D%EC%B2%B4-%EC%83%9D%EC%84%B1
- https://code00.tistory.com/92
