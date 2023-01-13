# call、apply和bind
三者都是用来改变this指向的: 
- call：第一个参数是this要绑定的对象，后面的参数是传给函数的参数（一个一个的）
- apply：第一个参数是this要绑定的对象，第二个参数是数组或类数组对象，函数中会一个一个接受
- call和apply调用时会立即执行函数，但是bind不会，只会返回对函数的引用。
示例：
``` js
var obj = {
    z: 1
};
var obj1 = {
    z: 2
};

function fn(x, y) {
    console.log(x + y + this.z);
};
// call与apply
fn.call(obj, 2, 3); //6
fn.apply(obj, [2, 3]); //6

var bound = fn.bind(obj, 2);
bound(3); //6
//尝试修改bind返回函数的this，this无法再被修改，使用call、apply也不行
bound.call(obj1, 3); //6
``` 

## 手写call函数
``` js
Function.prototype.call_ = function(obj) {
    obj = obj ? new Object(obj) : window;
    obj.fn = this;
    // 利用扩展运算符将arguments转化为数组
    const args = [...arguments].slice(1);
    let result = obj.fn(...args);
    delete obj.fn;
    return result;
}
``` 

## 手写apply函数
``` js
Function.prototype.apply_ = function(obj, arr) {
    obj = obj ? new Object(obj) : window;
    obj.fn = this;
    const result = arr ? obj.fn(...arr) : obj.fn();
    delete obj.fn;
    return result;
}
```

bind的特性：
bind支持函数柯理化。
通过bind返回的函数也能通过new运算符构造，但是在构造过程中，原来绑定的this会忽略，且返回实例还是会继承构造函数的构造器属性与原型，并且能正常接受参数。
``` js
var z = 0;
var obj = {
    z: 1
};

function fn(x, y) {
    this.name = '听风是风';
    console.log(this.z);
    console.log(x);
    console.log(y);
};
fn.prototype.age = 26;

var bound = fn.bind(obj, 2);
var person = new bound(3);//undefined 2 3

console.log(person.name);//听风是风
console.log(person.age);//26
```

在这个例子中，先是将fn的this绑定为obj对象，从而得到了bound函数。随后对bound函数用了new运算符，得到了person实例。可以看到，先前绑定的this(obj)丢失了，但是构造器属性this.name以及原型属性fn.property.age都有顺利继承，而且两个形参2和3也成功传递进了函数。

为什么bound函数被new构造时会丢失原本绑定的this? ==>  构造函数被new调用时，本质上构造函数会创建一个实例对象，函数内部的this指向该实例，当执行到第8行时，this上并未被赋予属性z，所以输出undefined。

如果是new调用(new bound())，bound函数中的this指向实例本身，而如果是普通调用(bound())，this还指向obj

如果判断是new调用函数普通调用？  ==>  构造函数实例的constructor属性永远指向构造函数本身，而构造函数在运行时，函数内部的this指向实例，因此this.constructor也指向构造函数。因此，如果this.constructor===Fn，那就是new调用

## 手写bind函数：
``` js
Function.prototype.bind_ = function(obj) {
    if (typeof this !== 'function') {
        throw new Error('必须对函数使用bind');
    }
    const fn = this;
    // 创建中介函数,作用是防止直接修改实例原型对构造函数产生影响
    const fn_ = function() {}
    const args = Array.prototype.slice.call(arguments, 1);
    const bound = function () {
        const params = Array.prototype.slice.call(arguments);
        fn.apply(this.constructor === fn ? this : obj, args.concat(params));
    }
    fn_.prototype = this.prototype;
    bound.prototype = new fn_();
    return bound;
}
```