匿名插槽：
------
子组件把自己打包为一个标签。例: ```<child></child>```

在父组件中使用 ```<child></child>```标签，那么所有的子组件内容都会在标签中显示。

此时，如果父组件想向```<child></child>```中传入内容，是不能实现的。

因为子组件已经写死了，只能在子组件中修改。

所以，就有了slot插槽。

我们先在子组件中写好```<slot></slot>```，用来存放可能由父组件传入的内容。

当父组件中传入了内容，就原封不动地放入```<slot></slot>```中。

例父组件中:
```
<child>
    <p>我是父组件，我在这里放了一段话。</p>
</child>
```
子组件中：
```
<template>
    <div>
        <p>我是子组件，这段话的下面放置了一个插槽，当父组件有内容时，将会被放到插槽里。</p><br />
        <slot>/<slot>
    </div>
</template>
```

--------------------------------

具名插槽：
------
与匿名插槽很相似。

首先在子组件中，slot插槽要带有name属性，用来区分插入哪一个插槽。
例：
```
<slot name="slotA"></slot>
<slot name="slotB"></slot>
<slot></slot>
```
在父组件中，需要用template标签包裹要传入子组件中的内容。
例：
```
<template> 我会被传入子组件 </template>
```
此时并没有给template指定传入哪个插槽，因此，template会被传入匿名插槽，也就是会被传入没有name属性的slot中。

（注意：如果子组件中没有匿名插槽，那么没有指定插入位置的内容将不会被显示。）

所以，为了将内容正确地传入插槽，还需要为 template 指定传入的位置。
例：
```
<template slot='slotA'> 我会被传入子组件中的 slotA 插槽 </template>
<template slot='slotB'> 我会被传入子组件中的 slotB 插槽 </template>
```
在Vue新版本中的写法是：
```
<template v-slot:slotA> 我会被传入子组件中的 slotA 插槽 </template>
<template v-slot:slotB> 我会被传入子组件中的 slotB 插槽 </template>
```

--------------------------------

作用域插槽：
------
可以用于父子组件通信。

在子组件中需要给slot添加 name 属性，并使用 v-on 绑定子组件中的data。
slot会把绑定的值，以 key: value 的形式传递给父组件 v-slot:slotName='getData' 中的 getData
例，在子组件中：
```
<slot name="slotName" :dataKey="dataValue"></slot>
...
data(){
    return {
        dataValue: 'I am data.'
    }
}
...
```
在父组件中，添加 v-slot 属性。 v-slot 属性的格式为 v-slot:插槽名 = "随便起一个名"

其中"随便起一个名" 将会以 key:value 的形式，拿到子组件传回的数据。

举例如下：
```
<template v-slot:slotName="getData">{{ getData }}</template>
```

上例中，getData 拿到的数据是 {"dataKey": "dataValue"}，

因此，如果想要展示 dataValue 而不是 key:value

使用 . 运算符就可以了：
```
<template v-slot:slotName="getData">{{ getData.dataKey }}</template>
```