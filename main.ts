import { LinkedList } from "./LinkedList";

let linkList = new LinkedList();
linkList.insertFirstNode(1);
linkList.insertFirstNode(2);
linkList.insertFirstNode(3);
linkList.insertFirstNode(30);
linkList.insertLastNode(40);
console.log(linkList.getSize());
console.log(linkList.readList());