## 强缓存和协商缓存
第一次请求资源时，一定是向服务器发送请求，服务器返回200，响应头里会携带Expire/Cache-Control/Etag/Last-Modified等信息，浏览器会将这些字段和请求的返回时间一起缓存

再次请求资源时，根据请求头的Expire和Cache-Control(优先级更高)判断是否命中强缓存，命中直接读取缓存，不会发送请求到服务器：先比较当前时间与上一次返回200的时间差，如果没有超过cache-control的max-age，则缓存没有过期

若没有命中强缓存，一定会像服务器发送一个请求，请求头里携带if-modified-since和in-none-match，分别是上一次200返回的last-modified和Etag。服务器优先根据Etag值判断文件是否被修改，如果与in-none-match一致，则命中协商缓存，返回304；如果只有if-modified-since，则将if-modified-since与文件的最后修改时间做对比。

## script脚本中的defer和async
js是单线程的，script脚本的加载会阻塞后面的资源加载和dom解析，增加了defer或者async的script是异步加载的，不会阻塞。
- defer：异步加载，但是需要html解析完，DomContentLoaded之前执行，script脚本执行的顺序跟代码里写的顺序前后一致
- async：异步加载，加载完立即执行，执行仍然会阻塞后面的资源加载和dom解析。先加载完先执行，所以执行的顺序与代码写的顺序前后会不一致，不要使用async去加载有依赖关系的脚本

## 闭包的理解
垃圾回收机制--标记清除

闭包是函数与声明该函数词法环境的组合

闭包的意义在于：放置那些在声明函数的词法环境里，被标记“进入环境”，却没有标记“离开环境”的变量（即那些没有被回收的变量），供函数使用
``` js
function add() {
    let count = 1;
    function addNumber() {
        count += 1;
        return count;
    }
    return addNumber;
}

const res = add();
const increment1 = res();
const increment2 = res();
const increment3 = res();

console.log(increment1, increment2, increment3);  // 2 3 4
```
返回的addNumber中隐式地携带了count变量，这种隐式携带变量的特点，导致有且只有addNumber函数能够访问到count，就像是addNumber的一个封闭的私有的包。