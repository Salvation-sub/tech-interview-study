import { LinkedList, Node } from "./LinkedList.mjs";
import { Queue } from "./Queue.mjs";
import { Stack } from "./Stack.mjs";

let queue = new Queue();
console.log("======== enqueue() 세 번 호출=========");
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.front());
console.log("======== dequeue() 네 번 호출=========");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(`isEmpty: ${queue.isEmpty()}`);

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
