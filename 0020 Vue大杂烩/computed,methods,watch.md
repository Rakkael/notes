watch 侦听器
-------
在 watch 内写一个函数，函数名是你想要侦听的属性名，用来指定你想要侦听哪个属性。函数接收2个参数，第一个是新值，第二个是旧值。注意，顺序不能颠倒。
你完全不需要关注新值和旧值是如何传入的，当你想要监听的属性发生变化时，vue会自主地向函数内传递新值和旧值这两个参数。
你只需在函数体内书写操作就可以了。
```
watch:{
    想要侦听的属性(新值，旧值){
        侦听到改变后需要执行的操作;
    }
}
```
高级用法：handler immediate deep
immediate: 第一次被绑定的时候就执行
```
watch:{
    想要侦听的属性: {
        handler(val){
            想要执行的操作;
        },
        immediate: true
    }
}
```
deep: 对 data 的对象属性也进行绑定
```
watch:{
    想要侦听的属性: {
        handler(val){
            想要执行的操作;
        },
        immediate: true,
        deep: true
    }
}
```
computed 计算器
-------
在computed 内写一个函数，函数名可以自定义。函数体内的操作需要用到外部属性。只要当外部属性的值发生变化时，computed就会自主地执行函数体内的操作。
你完全可以把computed里的函数，当做一个data中的属性来进行使用。唯一的区别就是computed里的'属性值'，是经过计算的。
computed:{
    函数名(){
        this.属性1
        操作1
        操作2
        return 返回值
    }
}
高级用法：get set
把 computed 内的函数，看做一个data中的普通变量。那么当你为它赋值的时候，就会用到set(新的值)
```
computed:{
    属性名:{
        get(){
            return 想要执行的操作;
        },
        set(newVal){
            拿到新值后，响应式地修改外部属性;
            或任何你想执行的操作;
        }
    }
}
```
实战举例：
```
data(){
    return {
        firstName: 'bill',
        lastName: 'gates'
    }
}
computed:{
    fullName:{
        get(){  // 我用来返回新的值给 fullName
            return `${this.firstName} ${this.lastName}`;
        },
        set(newVal){ // 我用来接收新的值，并进行函数体内的操作。
            name = newVal.split(' ');
            this.firstName = name[0];
            this.lastName = name[name.length - 1];
        }
    }
methods:{
    resetFullName(){ // 当我被执行时，给fullName赋了新的值
        this.fullName = 'steve jobs'
    }
}
}
```

watch computed 区别

watch: 
不支持缓存，数据改变直接触发操作
支持异步
接收新旧两个参数

computed:
支持缓存
依赖数据发生改变才会重新计算
不支持异步，异步操作直接无效

数据变化时需要异步或者开销较大用watch，反之用computed

相同点：都是vue对监听器的实现，都起到监听/依赖一个数据并进行处理的作用
在应用中，computed主要应用于同步数据，而watch是用来观测一个值的变化去实现一段开销较大的复杂业务逻辑或执行异步操作
能用computed时优先使用computed，避免当我们需要得到的值依赖于多个数据时多次调用watch的尴尬


