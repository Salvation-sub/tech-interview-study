# Queue

- First In First Out(FIFO), 선입선출이라는 자료구조를 갖는다.
- 예시로 맛집 줄을 생각하면 편하다. 첫 번째로 예약한 손님이 첫 번째로 밥을 먹을 수 있는 구조이다.
- 구현시 단방향(이중) 연결리스트로 구현시 O(n)의 성능이 나오기 떄문에 양방향 연결리스트로 구현하는게 효율적이다.
- 양방향 연결리스트 사용시 O(1) 성능을 낼 수 있다.

## 큐 구현

### 큐의 추상자료형

1. enqueue = 데이터 삽입
2. dequeue = 데이터 제거
3. front = 데이터 참조
4. isEmpty = 비었는지 체크

### 이중 연결리스트 구현

```js
class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  //모든 데이터 출력
  printAll() {
    let currentNode = this.head;
    let text = "[";

    while (currentNode != null) {
      text += currentNode.data;
      currentNode = currentNode.next;

      if (currentNode != null) {
        text += ", ";
      }
    }

    text += "]";
    console.log(text);
  }

  // 모든 데이터 제거
  clear() {
    this.head = null;
    this.count = 0;
  }

  // 인덱스 삽입
  insertAt(index, data) {
    if (index > this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다.");
    }

    // 새로운 노드 생성
    let newNode = new Node(data);

    // 맨 첫번째 인덱스에 삽입할 경우
    if (index == 0) {
      // 새로 만든 노드의 next에 head를 지정해준다.
      newNode.next = this.head;
      if (this.head !== null) {
        this.head.prev = newNode;
      }
      // 기존 헤드를 newNode로 지정해준다.
      this.head = newNode;
    } else if (index === this.count) {
      newNode.next = null;
      newNode.prev = this.tail;
      this.tail.next = newNode;
    } else {
      // 리스트 중간 삽입
      let currentNode = this.head;

      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
        newNode.prev = currentNode;
        currentNode.next = newNode;
        newNode.next.prev = newNode;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }

    if (newNode.next == null) {
      this.tail = newNode;
    }
    this.count++;
  }

  // 마지막 요소 추가
  insertLast(data) {
    this.insertAt(this.count, data);
  }

  // 인덱스 삭제
  deleteAt(index) {
    // 범위를 넘어간 경우 에러처리 index가 음수이거나 범위보다 높을 경우
    if (index >= this.count || index < 0) {
      throw new Error("제거할 수 없습니다.");
    }

    let currentNode = this.head;

    if (index == 0) {
      let deletedNode = this.head;
      if (this.head.next == null) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }

      this.count--;
      return deletedNode;
    } else if (index == this.count - 1) {
      let deletedNode = this.tail;
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      this.count--;
      return deletedNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }

      let deletedNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      currentNode.next.prev = currentNode;
      this.count--;
      return deletedNode;
    }
  }

  // 마지막 요소 삭제
  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  // 인덱스 읽기
  getNodeAt() {
    if (index >= this.count || index < 0) {
      throw new Error("범위를 넘어 갔습니다.");
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}
export { DoublyLinkedList, Node };
```

### 큐 구현

```js
import { DoublyLinkedList } from "./DoublyLinkedList.mjs";

class Queue {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  enqueue(data) {
    this.list.insertAt(0, data);
  }

  dequeue() {
    try {
      return this.list.deleteLast();
    } catch (error) {
      return null;
    }
  }

  front() {
    return this.list.tail;
  }

  isEmpty() {
    return this.list.count == 0;
  }
}

export { Queue };
```
