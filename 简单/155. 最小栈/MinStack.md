### 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

- push(x) -- 将元素 x 推入栈中。
- pop() -- 删除栈顶的元素。
- top() -- 获取栈顶元素。
- getMin() -- 检索栈中的最小元素

 **示例:** 

```
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
```

LeetCode题目地址：[155. 最小栈](https://leetcode-cn.com/problems/min-stack/)

解法1：辅助栈和数据栈同步（采用数组处理）

- 注意：采用数组处理：这里栈是先进后出，所以数组的最后一位代表栈顶
- 辅助栈为空，那么必须放入新元素
- 新元素小于或等于辅助栈顶的元素的时候，才放入，
- 出栈的时候，辅助栈的栈顶等于数据栈的栈顶元素，才出栈

```js
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  // 主栈
  this.stack = []
  // 临时栈
  this.tempStack = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  // 将x存放到主栈中
  this.stack.push(x)
  // 数据入栈
  if (this.tempStack.length) {
    // 数据入栈时，如果临时栈不为空，需要判断入栈的元素是否小于临时栈顶，如果满足条件，放入临时栈
    this.tempStack[this.tempStack.length - 1] < x ? '' : this.tempStack.push(x)
  } else {
    // 如果临时栈为空，那么必须放入一个新元素
    this.tempStack.push(x)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  // 删除栈顶元素，因为栈是先进后出，这里用的数组存储，所以栈顶是在数组最后一位
  let pop = this.stack.pop()
  // 需要判断主栈栈顶元素和临是栈元素是否相等，相等的话就进行删除
  if (pop == this.tempStack[this.tempStack.length - 1]) {
    this.tempStack.pop()
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  // 栈是先进后出，这里用的数组存储，所以栈顶是在数组最后一位
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  // 因为在处理临时栈的时候，是小于临时栈顶的元素才push到临时栈，所以临时栈的最小一位是最后一个数组
  return this.tempStack[this.tempStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```

