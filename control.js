
// 获取dom
function G(id) {
  return document.getElementById(id);
}


var UI = {};
// 为dom注册事件方法
/**
 * 第⼀参数：为button节点id
 * 第⼆参数：为需要注册的触发事件
 * 第三参数：事件触发函数
 * 第四参数：需要传递的参数
 */
UI.register = function(id, even, fun, arr) {
  if(G(id)) {
    G(id)["on"+even] = function(){ fun(arr);};
  }
}


// 注册事件
UI.register("baidu", "click", tipInfo, [1,2]);