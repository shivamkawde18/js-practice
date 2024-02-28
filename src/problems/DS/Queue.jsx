class Queue {
  constructor() {
    this.queue = [];
  }

  size() {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  dqueue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    } else {
      return this.queue.shift();
    }
  }

  equeue(item) {
    this.queue.push(item);
  }

  rear() {
    if (this.isEmpty()) {
      return "Queue is empty";
    } else {
      return this.queue[this.queue.length - 1];
    }
  }
}
const q = new Queue();
q.equeue(5);
q.equeue(15);
q.equeue(25);
q.equeue(35);

q.dqueue();
console.log(q);
console.log(q.rear());
