// Queue ADT implementation

class Queue {

  // array based queue constructor
  constructor(){
    this.arr = [];
  }

  // pushes data to the rear end of the queue
  enqueue(data) {
    this.arr.push(data);
  }

  // pops the front of the queue
  dequeue() {
    return this.arr.splice(0, 1);
  }

  // checks if the queue is empty
  isEmpty() {
    return this.arr.length === 0 ? true : false;
  }

  // returns the length of the queue
  size() {
    return this.arr.length
  }

  // returns the ordered queue
  toString() {
    return this.arr.reverse();
  }

}

module.exports = Queue;
