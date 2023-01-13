# 手写函数

## 千分位加逗号
// 千分位加逗号
// 1123456789.123  ->  1,123,456,789.123

**方法1: 使用数组**
``` js
/**
 * number: 限制为string类型
 * return: string类型即可
 */
function formatNumber1(number) {
    const arr = number.split('.');
    const integer = arr[0].split('');
    const fraction = arr[1];
    let resArr = [];
    integer.reverse().forEach((ch, index) => {
        if (index !== 0 && index % 3 === 0) {
            resArr.push(',');
            resArr.push(ch);
        } else {
            resArr.push(ch);
        }
    });
    const intRes = resArr.reverse().join(''); 
    return fraction ? intRes + '.' + fraction : intRes;
}
```

**方法2: 使用正则表达式**
``` js
function formatNumber2(number){
    const res = number.replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
    return res;
}
```