---
title:"0005 async_await的理解"
output:pdf_document
---

1、为什么有了promise 还要有 async/await?
```
Promise虽然跳出了异步嵌套的怪圈，用链式表达更加清晰，但是我们也发现如果有大量的异步请求的时候，流程复杂的情况下，会发现充满了屏幕的then，看起来非常吃力，而ES7的Async/Await的出现就是为了解决这种复杂的情况。
```

关于async的理解
```
1、打包函数的返回值，打包为promise对象。 返回值已经是promise了，就以返回值为准。
2、其他的就跟普通函数一样。
```
关于await理解
```
1、await在等右侧表达式的结果。
2、await会阻塞主线程，跳出async执行同步任务。等拿到表达式的值后，添加到异步任务队列。
```

关于promise
```
1、promise新建后会立即执行。
```

关于setTimeout的理解:
```
1、setTimeout本质上是等待多少秒后，把要执行的函数丢入异步任务队列。
```

关于回调函数：
其实我在写flutter的时候已经见识过了。只不过一直在用优雅的写法。

```
// ----------别人的写法------------

var sayhello = function (name, callback) {
  setTimeout(function () {
    console.log(name);
    callback();
  }, 1000);
}
sayhello("first", function () {
  sayhello("second", function () {
    sayhello("third", function () {
      console.log("end");
    });
  });
});

// ----------我的写法------------

var sayhello = (name, callback) => {

    var printTime = () => {
        console.log(name);
        callback();
    }
    setTimeout(printTime, 1000);
}

var say3 = () => {
    console.log('end');         // 最后执行say3 输出 end
}

var say2 = () => {
    sayhello('third', say3)     // 接着执行say2 输出 third  (需要say3)
}

var say1 = () => {
    sayhello('second', say2)    // 然后执行say1 输出 second (需要say2)
}

sayhello("first", say1); //输出 first (sayhello需要say1参数，调用say1)
```