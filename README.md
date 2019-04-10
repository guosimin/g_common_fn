# g_common_fn
common method 一些常用的方法

## 安装
```javascript 
npm install --save-dev g_common_fn
```

## 例子
```javascript 

var commonFn = require('g_common_fn');
commonFn.copy("要复制的内容");

```


## 主要方法：

#### 功能类
1.[copy(data,successFn,errorFn)](https://github.com/guosimin/g_common_fn/blob/master/common/arrayUnique.js)
> 复制指定内容

2.[arrayUnique(param)](https://github.com/guosimin/g_common_fn/blob/master/common/arrayUnique.js)
> 数组去重

3.[getUrlParamsByName(name,url)](https://github.com/guosimin/g_common_fn/blob/master/common/getUrlParamsByName.js)
> 通过名字获取url参数

4.[multiSort(name,conditionArray)](https://github.com/guosimin/g_common_fn/blob/master/common/multiSort.js)
> 多条件组合排序

5.[trim(str)](https://github.com/guosimin/g_common_fn/blob/master/common/trim.js)
> 去除字符串中空格

6.[HTMLDecode(html)](https://github.com/guosimin/g_common_fn/blob/master/common/HTMLDecode.js)
> 还原转义的html


#### 判断类
1.[isEqualObj(obj1,obj2)](https://github.com/guosimin/g_common_fn/blob/master/common/isEqualObj.js)
> 判断两个对象是否相等

2.[isEmptyArray(value)](https://github.com/guosimin/g_common_fn/blob/master/common/isEmptyArray.js)
> 判断是否空数组


#### 数字处理类
1.[mathToFixed(param1,param2)](https://github.com/guosimin/g_common_fn/blob/master/common/mathToFixed.js)
> 数字-四舍五入

2.[matchMultiply(param1,param2)](https://github.com/guosimin/g_common_fn/blob/master/common/matchMultiply.js)
> 数字-精确相乘
