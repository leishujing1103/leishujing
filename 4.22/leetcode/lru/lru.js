// 不用每次都去硬盘里找，在内存中缓存
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.obj = {};  // key
    this.arr = [];
}

LRUCache.prototype.get = function(key) {
    // 有的话，返回 设置为最近使用
    // 没有的话，返回 -1
    var val = this.obj[key];
    // 容量不大的内存服务于最多的进程
    if (val >0) {
        var index = 
        this.arr.indexOf(key); 
        this.arr.splice(index,1);
        this.arr.unshift(key);
    }else {
        return -1;
    }
    

    

}
LRUCache.prototype.set = function(key,value) {
    if (this.obj[key]) {
        this.obj[key] = value;  // 1.更新
        // 最近使用 数组的最前面[0] 
        // ？之前的删除
        var index = 
        this.arr.indexOf(key);
        this.arr.splice(index,1);
        this.arr.unshift(key);  // 把key放置最前

    }
    // 如果有key,返回
    // 没有
    if (this.capacity === this.arr.length) {
        // 2.如果内存放满了，执行arr.pop()
        var k = this.arr.pop();  // 最近最少使用，队尾干掉
        this.obj[k] = undefined;
    }
    // 没有的话，有两种可能
    this.obj[key] = value;
    this.arr.unshift(key);
    

 

    // 存进arr里去
}