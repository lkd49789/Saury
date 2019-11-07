//微信提示框
// 时间格式化
var formatTime = (dateTime) => {
  var time = new Date(dateTime).getTime() - 8 * 3600000;
  var date = new Date(time);
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  var millisecond = date.getMilliseconds()
  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
var formatTimeSymbol = (dateTime, symbol) => {
  var date = new Date(new Date(dateTime).getTime() - 8 * 3600000);
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  return [year, month, day].map(formatNumber).join(symbol) + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
var formatDate = (time) => {
  var date = new Date(time).getTime() - 8 * 3600000;
  var time = new Date(date);
  var year = time.getFullYear(),
    month = time.getMonth() + 1,//月份是从0开始的
    day = time.getDate(),
    hour = time.getHours(),
    min = time.getMinutes(),
    second = time.getSeconds();
  var item = [year, month, day, hour, min,second];
  return item.map(formatNumber)
};
function beautify_time(argTime) {
  var timestamp = new Date(argTime).getTime() / 1000;
  var mistiming = Math.round(new Date() / 1000) - timestamp;
  var postfix = mistiming > 0 ? '前' : '后'
  mistiming = Math.abs(mistiming)
  var arrr = ['年', '个月', '星期', '天', '小时', '分钟', '秒'];
  var arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1];

  for (var i = 0; i < 7; i++) {
    var inm = Math.floor(mistiming / arrn[i])
    if (inm != 0) {
      return inm + arrr[i] + postfix
    }
  }
};
function beautify_time_1(argTime) {
  var timestamp = new Date(argTime).getTime() / 1000;
  var mistiming = Math.round(new Date() / 1000) - timestamp;
  var postfix = mistiming > 0 ? '前' : '内'
  mistiming = Math.abs(mistiming)
  var arrr = ['年', '个月', '星期', '天', '小时', '分钟', '秒'];
  var arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1];
  for (var i = 0; i < 7; i++) {
    var inm = Math.floor(mistiming / arrn[i])
    if (inm != 0) {
      return inm + arrr[i] + postfix
    }
  }
};
//数组去重
var myDistinct = (arr) => {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    var cur = arr[i];
    if (obj[cur] == cur) {
      arr.splice(i, 1);
      i--;
      continue;
    }
    obj[cur] = cur;
  }
  obj = null;
  return arr;
}
//数组对象去重
var myObjDistinct = (obj1, obj2, key) => {
  var result = [];
  for (var i = 0; i < obj1.length; i++) {
    var obj = obj1[i];
    var num = obj[key];
    var flag = false;
    for (var j = 0; j < obj2.length; j++) {
      var aj = obj2[j];
      var n = aj[key];
      if (n == num) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      result.push(obj);
    }
  }
  return result
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
// 求和
var getSum = (ar) => {
  var arr = ar
  var sum = arr.reduce(function (prev, curr, idx, arr) {
    return prev + curr;
  })
  return sum;
}
/**
   * 数字转整数 如 100000 转为10万
   * @param {需要转化的数} num 
   * @param {需要保留的小数位数} point 
**/
let tranNumber = (num, point) => {
  let numStr = num.toString()
  // 十万以内直接返回 
  if (numStr.length < 6) {
    return numStr;
  }
  //大于8位数是亿
  else if (numStr.length > 8) {
    let decimal = numStr.substring(numStr.length - 8, numStr.length - 8 + point);
    return parseFloat(parseInt(num / 100000000) + '.' + decimal) + '亿';
  }
  //大于6位数是十万 (以10W分割 10W以下全部显示)
  else if (numStr.length > 0) {
    let decimal = numStr.substring(numStr.length - 4, numStr.length - 4 + point)
    return parseFloat(parseInt(num / 10000) + '.' + decimal) + '万';
  }
}
//随机生成秘钥
let randomWord=(randomFlag, min, max)=>{
  /*
** randomWord 产生任意长度随机字母数字组合
** randomFlag-是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
** xuanfeng 2014-08-28
*/
  var str = "",
      range = min,
      arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  // 随机产生
  if(randomFlag){
      range = Math.round(Math.random() * (max-min)) + min;
  }
  for(var i=0; i<range; i++){
      pos = Math.round(Math.random() * (arr.length-1));
      str += arr[pos];
  }
  return str;
}
module.exports = {
  formatTime,
  formatDate,
  beautify_time,
  beautify_time_1,
  myDistinct,
  formatTimeSymbol,
  getSum,
  myObjDistinct,
  tranNumber,
  randomWord
}

