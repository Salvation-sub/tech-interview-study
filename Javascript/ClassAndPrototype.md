# `프로토타입 🔥`

- 객체를 상속하기 위한 방법.
- 모든 객체들이 메소드와 속성들을 상속 받기 위한 템플릿으로써 프로토타입 객체를 가진다.
- 프로토타입 객체는 상위 프로토타입 객체로부터 메소드와 속성을 상속받을 수 있다. 프로토타입 체인을 통해 다른 객체에 정의된 메소드와 속성을 한 객체에서 사용할 수 있게한다.
- 객체의 생성자의 prototype 속성에 상속되는 메소드와 속성이 정의되어있다.
- Object.create() : 객체를 프로토타입 객체로 삼아 새로운 객체를 생성합니다.

## 생성자 속성

- 모든 생성자 함수는 constructor 속성을 지닌 객체를 프로토타입 객체로 가지고 있다.
- 이 constructor 속성은 원본 생성자 함수 자신을 가리킨다.
- 예를 들어 Person.prototype 에 정의된 속성들은 Person 생성자로 생성된 모든 인스턴에서 사용할 수 있다.
- 인스턴스의 생성자 이름이 필요한 경우 아래의 코드로 알아낼 수 있다.

```js
person1.constructor.name;
```

출처 : [MDN object prototype](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Object_prototypes)

# `클래스 🔥`
