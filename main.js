// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let key = arr[i];
//     let j = i - 1;

//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j--;
//       console.log(arr[j]);
//     }

//     arr[j + 1] = key;

//     return arr;
//   }
// }
arr = ["islam", "niga", "bnt", "shi", "ds"];
// insertionSort(array);
let target = "ds";
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) return i;
  }
  return "not found";
}
console.log(linearSearch(arr, target));

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let mid;

  while (high >= low) {
    mid = low + Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) {
      high = mid - 1;
    } else low = mid + 1;
  }
  return -1;
}
const orderedNumbers = [1, 3, 5, 7, 9, 11, 14];
console.log(binarySearch(orderedNumbers, 7));
const unorderedNumbers = [7, 2, 11, 5, 1, 9];
function orderAndSearch(arr, x) {
  let sortedArray = arr.sort((a, b) => a - b);

  return binarySearch(sortedArray, x);
}
console.log(orderAndSearch(unorderedNumbers, 1));

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    let newnode = new Node(value);
    if (!this.head) {
      this.head = newnode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newnode;
  }
  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + "->";
      current = current.next;
    }
    console.log(result + "null");
  }
}
let list = new LinkedList();
list.append(10);
list.append(14);
list.append(20);
list.append(30);
list.printList();
