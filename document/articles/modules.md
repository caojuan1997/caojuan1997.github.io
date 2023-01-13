# Commonjs和ES6 Module

## 两者的区别
- Commonjs模块输出的是值的拷贝，ESM模块输出的是值的引用
- Commonjs模块导出的值可以进行修改，但是ESM导出的值不能修改，会报错
- Commonjs模块是运行时加载，ESM模块是编译时输出接口
- Commonjs是单个值导出，ESM模块可以导出多个
- Commonjs是动态语法，可以写在判断里，ESM模块是静态语法只能写在顶层；若要动态导入用import()
- Commonjs的this是当前模块，ESM的this是undefined

## Commonjs示例：
``` js
// A.js
let count = 3;
function change() {
    console.log('this', this);   // { count: 3, change: [Function: change] }
    count++;
    console.log('count的值：', count);
}

module.exports = {
    count,
    change
}
// B.js
const moduleA = require('./A.js');
console.log('改变前：', moduleA.count);  // 3
moduleA.change();   // 4
console.log('改变后：', moduleA.count);  // 3
``` 
## ESM示例：
``` js
// A.mjs
let count = 3;
function change() {
    console.log('this', this);   // undefined
    count++;
    console.log('count的值：', count);
}
export {
    count,
    change
}
// B.mjs
import { count, change } from './A.mjs';
console.log('改变前:', count);   // 3
change();   // 4
console.log('改变后:', count);   // 4
```

Commonjs方式，在B.js中导入了A.js中的count变量和change函数，因为导入的count只是对原有值的一个拷贝，尽管调用了change函数改变了A.js中的count，也没有影响B.js的count。

Commonjs最后导出是以module.exports为主，考虑以下几种情况：
``` js
// 第一种:count和change都会被导出
module.exports.count = 3;
module.exports.change = change;  
// 第二种：只有change会被导出，module.exports覆盖了之前的对象
module.export.count = 3;
module.exports = {
    change
}     
// 第三种：只有count会被导出，因为exports.count相当于module.exports.count，
// 往module.exports里添加了属性count，但是exports对象不是module.exports，所以不会覆盖
exports.count = 3;
exports = {
    change
}   
// 第四种：count和change都会被导出,等价于第一种
exports.count = 3;
module.exports.change = change 
// 引入时都是用require导入一整个模块：
const moduleA = require('./A.js');     
```                                
ESM有export和export.default两种方式，引入时稍微有点区别：
``` js
// A.mjs，方式2等价于方式1，与export.default可以共存，但是import时需要先import default
// 1
export const count = 3;
export const change = change;
// 2
export {
    count,
    change
}
// 3
export.default = {
    count,
    change
}
// B.js，以下两种方式都可以，但是第一种方式需要moduleA在最前面
import moduleA, { count, change } from './A.mjs'
import { default as moduleA, count, change } from './A.mjs'
```