- 抽象 ADT 具象引导
- 解决特定问题
 1. LeetCode 数据结构题
    linkedList
 2. GitHub algorithm OO写法
    封装成为class export default
 3. webpack 可见即可得

- 有一个链表  服务于各种算法  
1->4->3->2->5->2
存放数据，不连续
head 1
- node(n)->linkedList
  模块化 一个文件一个类
  es6的模块化
  append()

- index.js 
  业务代码

- node 不支持es6的模块化
  原生支持的是require commonJS
  compile prosets

- ADT 
  抽象数据类型
  链表 数据结构 配套方法
  append()
  toString()
  toArray()

head = 1->4->3->2->5->2  x = 3
对链表进行分隔， 小于x的节点放在左边，大于或等于x的节点放在其后 不影响之前的顺序
1->2->2左链表 之前 ->4->3->5 右链表 之后
链表 head tail  append()
两个链表首尾相连 tail1.next = head2
