/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.stack1 = []
  this.stack2 = []
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  // 检查stack2是否为空，如果不为空，把stack2的内容压入stack1中
  while(this.stack2.length) {
    this.stack1.push(this.stack2.pop())
  }
  this.stack1.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  // 每次移除顶部元素，都先把stack1压入stack2中
  while(this.stack1.length) {
    this.stack2.push(this.stack1.pop())
  }
  return this.stack2.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  while (this.stack2.length) {
    this.stack1.push(this.stack2.pop());
  }
  return this.stack1[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  while (this.stack2.length) {
    this.stack1.push(this.stack2.pop());
  }
  return !this.stack1.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
