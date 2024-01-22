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
  getNodeAt(index) {
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
