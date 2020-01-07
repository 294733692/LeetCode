### LeetCode 17  给定一个仅包含数字 `2-9` 的字符串，返回所有它能表示的字母组合。给出数字到字母的映射如下（与电话按键相同）。

#### 注意 1 不对应任何字母。

<img src="https://assets.leetcode-cn.com/aliyun-lc-upload/original_images/17_telephone_keypad.png" alt="img" style="zoom:50%;" />

示例：

```js
输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
```

看到题目，第一个想到的是方法简单粗暴，循环遍历处理。后面发现一个数字可能对于三个字符、或者4个字符。

想到的就是使用递归。

步骤：

1. 建立一个map数组，使每个数组，对应字符串，如（2--> 'abc'）
2. 将传入的字符串拆分成数组
3. 建立输入字符串对应的英文字段
4. 递归处理（先处理前面两个，处理成功后，删除数组0,1，并用处理结果与arr[2]递归，并依次）
5. 返回处理值，返回结果

```js
let letterCombinations = (str) => {
    let map =  ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    let num = str.split('') // 将参数拆分为数组
    let code = [] // 用于存放输入字符串对应的英文字段
    // 建立输入字符串对应的英文字段映射
    num.forEach(item => {
        // 处理输入字符串为''、1、的情况
        if (map(item)) {
            code.push(map(item))
         }
    })
    
    if (code.length === 0) { // 处理输入0、1、空的情况
        return code
     }
    
    if (code.length === 1) { // 处理输入 >1，如2、3的时候
        return code[0].split("")
	}
    
    let _combinations = (arr) => {
        let result = [] // 临时变量，用于存放数据
        for (let i = 0; i < arr[0].length; i++) {
            for (let j = 0; j < arr[1].length; j++) {
                result.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }
        arr.splice(0, 2, result) // reslut替换数组中arr[0], arr[1]
        
        // 递归
        if (arr.length > 1) {
            _combinations(arr)
          } else {
            return arr
          }
        return arr[0]
    }
    return _combinations(code)
}
```

