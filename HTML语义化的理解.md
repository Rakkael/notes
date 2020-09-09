我平常写的就是语义化的html
标题用h1-h6
文章用p

荒野
后台用html
table布局 很复杂


美工阶段
div + css 加class
但不够语义化都是div


前端阶段
用正确标签写正确的内容
专业化


meta viewport搜3篇对比

html5 标签 header main footer article canvas video audio
canvas video audio重点追问
canvas 如何绘制？ 获取 设置 颜色范围
video src地址 autoplay


什么是h5 知乎


css
两种盒模型
特点区别 为什么会有新的
哪个好？另一个写法最方便

7种方式居中
jscode
拔高 为什么水平容易实现 垂直不容易  回溯机制 可以不拔高

flex常用属性

BFC是什么
举例子 全称是 块级格式化上下文
给一个div 写overflow:hidden 浮动元素就会被包裹起来

css选择器优先级
1、越具体优先级越高
    举例：
    .xxx{}
    .not(.xxx):first-child {}

2、写在后面的覆盖前面的
3、important 最高

清除浮动
代码
.clearfix{
    content:
    dispaly block;
    clear:both
} 
把这段添加到容器里



es6 方应杭 前10个

1、es6语法知道哪些
重点promise class

2、promise.all .race

3、手写防抖节流

4、手写ajax
var request = new XMLHttpRequest()
request.open('GET','/xxxx')
request.onreadystatechange = ()=> {console.log('请求成功')}
request.send()


这段代码里的this是什么？
方应杭 this
    1. fn()
    this => window
    2. obj.fn()
    this => obj
    3. fn.call(xx)
    this => xx
    4. fn.apply(xx)
    this => xx
    5. fn.bind(xx)
    this => xx
    6. new Fn()
    this => 新对象
    7. fn = () => {}
    this => 外面的this

闭包 立即执行函数

jsonp cors 跨域 难点

async await
try catch捕获异常

深拷贝
1、递归
2、判断类型
3、检查循环引用
4、不可能拷贝__proto__


正则实现trim()
function trim(string){
    return string.replace(/^\s+|\s+$/g, '')
}

不用class继承 用的话如何
原型方法

class dog extends animal{
    constructor{
        super()
    }
}

如何实现数组去重
1. hash
2. [...new Set(array)]
3. WeakMap 支持所有类型


13、 1 == ''

14、手撕promise
送命题


dom事件委托
用mouse写一个可以拖拽的div

http状态码 分别什么意思
http缓存有哪几种
get post区别
cookie localstroage sessionstorage session


必考：watch 和 computed 和 methods 区别是什么？
必考：Vue 有哪些生命周期钩子函数？分别有什么用？
必考：Vue 如何实现组件间通信？
必考：Vue 数据响应式怎么做到的？
必考：Vue.set 是做什么用的？
Vuex 你怎么用的？
VueRouter 你怎么用的？
路由守卫是什么？


超纲
js 垃圾回收机制
eventloop

