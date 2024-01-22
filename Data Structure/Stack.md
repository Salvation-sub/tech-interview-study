# Stack

- First In Last Out (FIFO), 즉 먼저 들어온 데이터가 제일 마지막에 나오는 자료구조이다.
- 한쪽으로만 데이터를 삽입, 제거를 하면 스택 자료구조를 쉽게 구현 할 수 있다.

## 스택 구현

### 스택의 추상자료형

1. push = 데이터 삽입
2. pop = 데이터 제거
3. peek = 데이터 참조
4. isEmpty = 비었는지 체크

```js
import { LinkedList } from "./LinkedList.mjs";

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  // 링크드 리스트 헤드에 해당 데이터를 쌓는다
  push(data) {
    this.list.insertAt(0, data);
  }

  // 링크드 리스트 헤드인 0번째 인덱스를 삭제해준다.
  pop() {
    try {
      return this.list.deleteAt(0);
    } catch (error) {
      return null;
    }
  }

  // 링크드 리스트 0번째 인덱스를 확인해준다.
  peek() {
    return this.list.getNodeAt(0);
  }

  isEmpty() {
    return this.list.count == 0;
  }
}

export { Stack };
```

```js
import { Stack } from "./Stack.mjs";

let stack = new Stack();

console.log("==== 스택 첫번쨰 출력=====");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);

console.log("=== 스택 두번째 출력===");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.peek().data); // 4
stack.pop();
console.log(stack.peek().data); // 3
console.log(`isEmpty: ${stack.isEmpty()}`); // false
stack.pop();
stack.pop();
stack.pop();
console.log(`isEmpty: ${stack.isEmpty()}`); // true
```
