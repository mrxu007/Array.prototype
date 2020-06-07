//手写push原理
Array.prototype.push = function () {
  // console.log('自定义数组方法push');
  // console.log(arguments);    arguments是函数种用于是用于初始化实参变量的集合
  // console.log(this);         this指向的是调用该方法的对象
  for(var i = 0; i < arguments.length; i++){
    this[this.length] = arguments[i];
  }
  return this.length;  //并返回数组长度
}
//手写pop原理
Array.prototype.pop = function () {
  // console.log('自定义数组方法pop');
  var temp = this[this.length-1];
  this.length = this.length - 1 //数组长度-1 自动就会不记录后面长度的元素,很弹性
  return temp; // 返回被删除的元素
}
//手写shift原理
Array.prototype.shift = function () {
  // console.log('自定义数组方法shift');
  var first = this[0];
  for(var i = 0; i < this.length; i++){
      this[i] = this[i+1];
  }
  this.length = this.length - 1
  return first;
}
//手写unshirt原理
Array.prototype.unshift = function () {
  // console.log('自定义数组方法unshirt');
  for(var i = 0; i < arguments.length; i++){
    var later = this.length;  //每次进来都要读一次数组长度
    for(var j = 0; j < this.length; j++){
      this[later] = this[later - 1]; 
      later--;
    }
    this[0] = arguments[i];
  }
  return this.length;
}
//手写reverse原理
Array.prototype.reverse = function () {
  console.log('自定义数组方法reverse');
  var later = this.length - 1,  //没有涉及到增加删除，所以只需要正确的元素下标
      temp; //  替换介质
  for(var i = 0; i < this.length; i++){
    temp = this[i];
    this[i] = this[later];
    this[later] = temp;
    if(later == i || later - i == 1 ){
    }
    later--;
  }
  return this;
}