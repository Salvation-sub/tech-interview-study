# `원시 값과 객체 비교 🔥`

## 동적 타이핑을 지원하는 자바스크립트에서 데이터의 타입을 크게 2개로 나누는 이유가 있을까요?

> **원시타입(Primitive type**)은 변수들의 데이터가 복사가 일어날 때마다 메모리 공간을 새로 확보하여 독립적인 값을 저장한다. 불변성을 가지고 있다.

```jsx
let a = 100;
let b = a;
a = 50;

console.log(b); // 100
```

> **참조타입(Reference Type)**은 메모리에 직접 접근이 아닌 메모리의 주소에 대한 간접적인 참조를 통해 메모리에 접근하는 데이터 타입이다. 변수의 크기가 동적으로 변한다. **ex) 배열 , 객체, 함수**

- Object의 데이터 자체는 별도의 메모리 공간(heap)에 저장되며, 변수에 할당 시 데이터에 대한 주소가 저장되기 때문에 자바스크립트 엔진이 변수가 가지고 있는 메모리 주소를 이용해서 변수의 값을 접근하게 된다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b37f9b4d-9246-42c0-86d9-ccea5c4946da/Untitled.png)

```jsx
let myArr = [];
let copyArr = myArr;

myArr.push("heelo");
console.log(copyArr); // heelo
```

- 위와 같이 두가지 배열은 같은 주소를 참조하고 있기에 하나가 변하면 다른 하나도 함께 변하기 떄문에 수정 및 복사를 조심해야한다.

## 값에 의한 전달이 뭔가요?

> **값에 의한 전달(Pass By Value)** 는 원시 타입을 값으로 전달하는 것이다. 참조가 아닌 아예 새로운 주소와 같은 값으로 복사를 하여 전달하기 때문에 **깊은 복사**를 할 수 있다.

```jsx
let bar = 1;
let foo = bar;

console.log(bar, foo); // 1 1
console.log(bar === foo); // true

foo = 10;

console.log(bar, foo); // 1, 10
console.log(bar === foo); // false
```

## 참조에 의한 전달이 뭔가요?

> **참조에 의한 전달(Pass By Reference)**는 객체 타입 또는 참조 타입에 의해 전달된다. 참조 타입은 복사할 시 같은 주소를 참조하기에 값이 변경되면 복사한 객체도 함께 변경되기에 **얕은 복사**를 할 수 있다.

```jsx
let bar = {
  num: 1,
};

let foo = bar;

console.log(bar.num, foo.num); // 1, 1
console.log(bar === foo); // true

bar.num = 2;

console.log(bar.num, foo.num); // 2, 2
console.log(bar === foo); // true
```
