# Linked List

배열의 단점을 보완하기위해 생겨난 불연속성 자료구조이다. 저장할려는 데이터들을 노드기반으로 데이터를 분산시켜 저장하고 사용하는 구조이다.

## 연결리스트의 장점

- 데이터 추가시 빈 메모리공간 아무 곳에 생성하고 연결만 시켜주면 된다, 즉 배열에서 초기 크기를 알아야 한다는 단점이 보완된다.

## 연결리스트의 단점

- 연속성의 주소를 갖는 배열과 달리 불연속성을 갖고 있는 연결리스트는 데이터 참조할 때 O(n)의 성능을 갖는다.

## 연결 리스트 구현

### 연결리스트의 추상자료형

1. 모든 데이터 출력 = printAll()
2. 모든 데이터 제거 = clear()
3. 인덱스 삽입 = insert(index, data)
4. 마지막 삽입 = inserLast(data)
5. 인덱스 삭제 = delete(index)
6. 마지막 삭제 = deleteLast()
7. 인덱스 읽기 = getNodeAt(index)

```js
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
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
      // 기존 헤드를 newNode로 지정해준다.
      this.head = newNode;
    } else {
      // 리스트 중간 삽입
      let currentNode = this.head;

      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
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
      this.head = this.head.next;
      this.count--;
      return deletedNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }

      let deletedNode = currentNode.next;
      currentNode.next = currentNode.next.next;
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
export { LinkedList, Node };
```

### 구현된 연결 리스트 출력

```js
import { LinkedList, Node } from "./LinkedList.mjs";

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

console.log(node1.data);
console.log(node1.next.data);
console.log(node1.next.next.data);

let list = new LinkedList();

console.log("================ insertAt() 다섯 번 호출 ===========");
list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(4, 4);
list.printAll();

console.log("================ clear() ===========");
list.clear();
list.printAll();

console.log("================ insertLast() 세 번 호출 ===========");
list.insertLast(0);
list.insertLast(1);
list.insertLast(2);
list.printAll();

console.log("================ deleteAt() 호출 ===========");
list.deleteAt(0);
list.printAll();
list.deleteAt(1);
list.printAll();

console.log("================ deleteLast() 호출 ===========");
list.insertLast(5);
list.deleteLast();
list.deleteLast();
list.printAll();

console.log("======= getNodeAt() 호출 ======");
list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
list.insertLast(5);

let secondeNode = list.getNodeAt(2);
console.log(secondeNode);
```
