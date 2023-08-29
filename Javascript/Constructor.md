# `생성자 함수에 의한 객체 생성 🔥`

## 생성자 함수가 뭔가요?

> 생성자 함수는 Javascript에서 객체를 생성하기 위해 사용되는 **특수한** 함수이다. 생성자 함수로 객체를 생성하기 위해서는 **new 연산자**를 이용해 호출해야 한다.
> Javascript는 기본적으로 Date, Array, Boolean, Error, Function, Number 등 다양한 내장 생성자를 제공하고 있다.

- 생성자 함수를 활용한 객체 생성 예

```js
// 생성자 함수
function UserInfo() {
  this.name = "Daniel";
  this.age = 22;
  this.address = "Pangyo";
}

// 객체 생성
let userInfo = new UserInfo();

console.log(userInfo);
```

- 실행 결과

```
UserInfo {name: "Daniel", age: 22 , address: "Pangyo"}
```

## 객체 리터럴로 만들 때와는 무슨 차이가 있죠? 왜 생성자 함수를 사용하나요?

생성자로 통해 만들어진 객체와 객체 리터럴로 만들어진 객체의 차이점이 무엇인지 아래 예제를 통해 알아보자.

- 객체 리터럴 생성 (가독성 저하 및 중복 소스코드)

```js
let userInfo1 = {
  name: "홍길동",
  age: 20,
  addresss: "서울",
};

let userInfo2 = {
  name: "홍길동",
  age: 20,
  addresss: "서울",
};

let userInfo3 = {
  name: "홍길동",
  age: 20,
  addresss: "서울",
};
```

동일한 프로퍼티를 갖는 객체인데도 불구하고 값이 다르다는 이유로 중복된 코드를 만들어야함으로 가독성이 떨어질 수 있다.

- 객체 리터럴 생성 (재사용성)

```js
let userInfo1 = {
  name: "홍길동",
  age: 20,
  addresss: "서울",
};

let userInfo2 = userInfo1;
let userInfo3 = userInfo1;

userInfo3.name = "마이콜";

console.log(userInfo1.name);
console.log(userInfo2.name);
console.log(userInfo3.name);
```

- 실행 결과

```
마이콜
마이콜
마이콜
```

실행 결과를 보다시피 userInfo1 의 값들로 초기화 시키면서 중복된 코드를 줄일 수 있었지만 하나의 프로퍼티를 변화시키면 각 객체가 독립적인 아닌 다같이 변화하는 것을 알 수 있다.
이 문제는 하나의 객체를 참조하고 있기 때문에 발생하는 것이다.

- 생성자 생성

```js
function UserInfo() {
  this.name = "홍길동";
  this.age = 20;
  this.addresss = "서울";
}

let userInfo1 = new UserInfo();
let userInfo2 = new UserInfo();
let userInfo3 = new UserInfo();

userInfo3.name = "마이콜";

console.log(userInfo1.name);
console.log(userInfo2.name);
console.log(userInfo3.name);
```

- 실행 결과

```
홍길동
홍길동
마이콜
```

실행 결과를 보면 생성자를 통해 생성된 객체는 독립적으로 잘 작동하는 것을 볼 수 있다. 생성장 함수를 통해 생성된 객체는 독립성이 보장된다.

## 생성자 함수가 객체(인스턴스)를 생성하는 과정에 대해 간략하게 설명해줄 수 있나요?

1. 생성자 함수 선언
2. 인스턴스 생성
3. 인스턴스 초기화
4. 인스턴스 반환

```js
// 1. 생성자 함수 선언
function Circle(radius) {
  // 3. 인스턴스 초기화
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
  // 4. 인스턴스 생성시에 생성자 함수를 호출할 때 넣은 인수를 this 바인딩을 통해 프로퍼티에 할당한 뒤, 인스턴스를 반환한다
}
// 2. 인스턴스 생성
const circle1 = new Circle(5); // 반지름이 5인 Circle 객체를 생성
```
