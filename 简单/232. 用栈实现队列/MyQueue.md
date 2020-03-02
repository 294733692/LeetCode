### 用栈实现队列
使用栈实现队列的下列操作：

- push(x) -- 将一个元素放入队列的尾部。
- pop() -- 从队列首部移除元素。
- peek() -- 返回队列首部的元素。
- empty() -- 返回队列是否为空

**示例:**

```
MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);  
queue.peek();  // 返回 1
queue.pop();   // 返回 1
queue.empty(); // 返回 false
```

**说明:**

- 你只能使用标准的栈操作 -- 也就是只有 `push to top`, `peek/pop from top`, `size`, 和 `is empty` 操作是合法的。
- 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
- 假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。

LeetCode题目地址：[232. 用栈实现队列](https://leetcode-cn.com/problems/implement-queue-using-stacks/)

```js
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
```

题目比较简单，最只要是为了考察理解栈和队列，

- 队列：先进先出.
- 栈：先进后出
