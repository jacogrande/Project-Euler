// Singly linked list data type

// LinkedList constructor with dataType specification
class LinkedList {

  constructor(dataType = null){
    this.dataType = dataType;
    this.head = null;
    this.tail = null;
  }


  // add method
  add(data) {
    if(this.dataType !== null && !(data instanceof this.dataType)){
      throw new Error(`Input data not of type: ${this.dataType}`);
    }
    const newNode = new Node(data);

    // checks for special case: no items in list
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }

  }

  get(index) {
    // ensure positive value of index
    if(index > -1){
      // pointer
      let current = this.head;

      let i = 0;

      // traverse the list until i reaches the appropriate index or until you reach the end of the list
      while(current !== null && i < index) {
        current = current.next;
        i++;
      }

      // return the data if the current node does not equal null
      return current !== null ? current.data : undefined;
    } else {
      return undefined;
    }

  }

  // remove method
  remove(index) {

    // special case: empty list or invalid index
    if (this.head === null || index < 0){
      throw new Error(`Index ${index} does not exist in the list.`);
    }

    // special case: removing the first node
    if (index === 0){
      // use a temp to store data in the first node and then set the head to be the next node
      let temp = this.head.data;
      this.head = this.head.next;
      return temp;
    }

    // traverse through the list, saving the current and the previous
    let current = this.head;
    let previous = null;
    let i = 0;

    // traverse through the list
    while(current !== null && i < index){
      previous = current;
      current = current.next
      i++;
    }

    // if node was found, remove it
    if(current !== null){
      previous.next = current.next;
      return current.data;
    }

    throw new Error(`Index ${index} does not exist in the list.`);

  }

  toString() {
    let displayArray = [];
    let current = this.head;
    while(current !== null){
      displayArray.push(current.data);
      current = current.next;
    }
    console.log(displayArray);
  }

}

function Node(data){
  this.data = data;
  this.next = null;
}

module.exports = LinkedList;
