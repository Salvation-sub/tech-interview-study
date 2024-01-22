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
