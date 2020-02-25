// Stack ADT

// Stack constructor
class StackADT {

  constructor(){
    this.top = 0;
    this.array = [];
  }

  // checks to see if the stack is empty
  isEmpty() {
    return this.top === 0 ? true : false;
  }

  // adds a new element to the stack
  push(data) {
    this.array[this.top] = data;
    this.top++;
  }

  // removes and returns the top element on the stack
  pop() {
    let temp = this.array[this.top-1];
    this.array.splice(this.top-1, 1);
    this.top--;
    return temp;
  }

  // returns the top element on the stack
  peek() {
    return this.array[this.top-1];
  }

  // returns the size of the stack
  size() {
    return this.array.length;
  }

  toString() {
    return this.array.reverse();
  }

}

module.exports = StackADT;
