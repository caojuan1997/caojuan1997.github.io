# setTimeout中this的指向
在浏览器和node环境中，两个的指向不一致，前者指向window(非严格模式)或者undefined(严格模式)，后者指向global

``` js
let obj = {
    a: 1,
    fn: function() {
        console.log('this in fn', this);    // obj对象
        const cb = function() {
            console.log('this in cb', this);   // window对象
        }
        setTimeout(cb, 0);
    }
}
obj.fn();
```
在fn函数中，this指向obj对象，setTimeout的this也是obj对象，但是setTimeout里面的函数（即cb函数）的this是window

``` js
let obj = {
    a: 1,
    fn: function () {
        console.log('this in fn', this);    // obj对象
        const cb = () => {
            console.log('this in cb', this);   // obj 对象
        }
        setTimeout(cb, 0);
    }
}
obj.fn();
```
cb函数换成箭头函数后，里面的this会继承外层函数的this，也就是继承setTimeou的this，即obj对象

``` js
let obj = {
  say: function () {
    console.log(this); //延迟执行函数中的this
  },
  print: function () {
    //setTimeout调用环境中的this，在1中指向obj，2中指向window
    setTimeout(this.say, 0); 
  },
};

// 1. 正常输出this，this.say可以找到
obj.print();

// 2. 会报错，func()相当于window.func()，此时找不到this.say
let func = obj.print;
func();
``` 
setTimeout里面的超时函数在寻找变量时，如果没有this，则会沿着定义时的作用域向上查找，比如：
``` js
var a = 1;
function func() {
  let a = 2;
  setTimeout(function () {
    console.log(a);
    console.log(this.a);
  }, 0);
}
func(); //输出2 1
```
在浏览器环境中，setTimout的第一个参数（即延时执行函数）可以是一个字符串，此时相当于内部调用了eval()，其作用域也是全局作用域window。不推荐传递字符串作为第一个参数。比如：
``` js
// setTimout第一个参数为字符串时，只能用在浏览器环境，不可用在node环境
var a = 2;
function say(a) {
  console.log(a);
}
function test() {
  let a = 1;
  setTimeout("say(a)", 0);
}
test(); //2

var a = 2;
function test() {
  let a = 1;
  function say(a) {
    console.log(a);
  }
  setTimeout("say(a)", 0);
}
test(); // 报错，因为全局作用域里没有say函数
```

