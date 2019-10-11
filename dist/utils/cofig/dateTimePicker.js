'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function withData(param) {
  return param < 10 ? '0' + param : '' + param;
}
function getLoopArray(start, end) {
  var start = start || 0;
  var end = end || 1;
  var array = [];
  for (var i = start; i <= end; i++) {
    array.push(withData(i));
  }
  return array;
}
function getMonthDay(year, month) {
  var flag = year % 400 == 0 || year % 4 == 0 && year % 100 != 0,
      array = null;
  switch (month) {
    case '01':
    case '03':
    case '05':
    case '07':
    case '08':
    case '10':
    case '12':
      array = getLoopArray(1, 31);
      break;
    case '04':
    case '06':
    case '09':
    case '11':
      array = getLoopArray(1, 30);
      break;
    case '02':
      array = flag ? getLoopArray(1, 29) : getLoopArray(1, 28);
      break;
    default:
      array = '月份格式不正确，请重新输入！';
  }
  return array;
}
function getNewDateArry() {
  // 当前时间的处理
  var newDate = new Date();
  var year = withData(newDate.getFullYear()),
      mont = withData(newDate.getMonth() + 1),
      date = withData(newDate.getDate()),
      hour = withData(newDate.getHours()),
      minu = withData(newDate.getMinutes()),
      seco = withData(newDate.getSeconds());

  return [year, mont, date, hour, minu, seco];
}
function dateTimePicker(startYear, endYear, date) {
  // 返回默认显示的数组和联动数组的声明
  var dateTime = [],
      dateTimeArray = [[], [], [], [], [], []];
  var start = startYear || 1978;
  var end = endYear || 2100;
  // 默认开始显示数据
  var defaultDate = date ? [].concat(_toConsumableArray(date.split(' ')[0].split('-')), _toConsumableArray(date.split(' ')[1].split(':'))) : getNewDateArry();
  // 处理联动列表数据
  /*年月日 时分秒*/
  dateTimeArray[0] = getLoopArray(start, end);
  dateTimeArray[1] = getLoopArray(1, 12);
  dateTimeArray[2] = getMonthDay(defaultDate[0], defaultDate[1]);
  dateTimeArray[3] = getLoopArray(0, 23);
  dateTimeArray[4] = getLoopArray(0, 59);
  dateTimeArray[5] = getLoopArray(0, 59);

  dateTimeArray.forEach(function (current, index) {
    dateTime.push(current.indexOf(defaultDate[index]));
  });

  return {
    dateTimeArray: dateTimeArray,
    dateTime: dateTime
  };
}
module.exports = {
  dateTimePicker: dateTimePicker,
  getMonthDay: getMonthDay
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGVUaW1lUGlja2VyLmpzIl0sIm5hbWVzIjpbIndpdGhEYXRhIiwicGFyYW0iLCJnZXRMb29wQXJyYXkiLCJzdGFydCIsImVuZCIsImFycmF5IiwiaSIsInB1c2giLCJnZXRNb250aERheSIsInllYXIiLCJtb250aCIsImZsYWciLCJnZXROZXdEYXRlQXJyeSIsIm5ld0RhdGUiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJtb250IiwiZ2V0TW9udGgiLCJkYXRlIiwiZ2V0RGF0ZSIsImhvdXIiLCJnZXRIb3VycyIsIm1pbnUiLCJnZXRNaW51dGVzIiwic2VjbyIsImdldFNlY29uZHMiLCJkYXRlVGltZVBpY2tlciIsInN0YXJ0WWVhciIsImVuZFllYXIiLCJkYXRlVGltZSIsImRhdGVUaW1lQXJyYXkiLCJkZWZhdWx0RGF0ZSIsInNwbGl0IiwiZm9yRWFjaCIsImN1cnJlbnQiLCJpbmRleCIsImluZGV4T2YiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBd0I7QUFDdEIsU0FBT0EsUUFBUSxFQUFSLEdBQWEsTUFBTUEsS0FBbkIsR0FBMkIsS0FBS0EsS0FBdkM7QUFDRDtBQUNELFNBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTRCQyxHQUE1QixFQUFnQztBQUM5QixNQUFJRCxRQUFRQSxTQUFTLENBQXJCO0FBQ0EsTUFBSUMsTUFBTUEsT0FBTyxDQUFqQjtBQUNBLE1BQUlDLFFBQVEsRUFBWjtBQUNBLE9BQUssSUFBSUMsSUFBSUgsS0FBYixFQUFvQkcsS0FBS0YsR0FBekIsRUFBOEJFLEdBQTlCLEVBQW1DO0FBQ2pDRCxVQUFNRSxJQUFOLENBQVdQLFNBQVNNLENBQVQsQ0FBWDtBQUNEO0FBQ0QsU0FBT0QsS0FBUDtBQUNEO0FBQ0QsU0FBU0csV0FBVCxDQUFxQkMsSUFBckIsRUFBMEJDLEtBQTFCLEVBQWdDO0FBQzlCLE1BQUlDLE9BQU9GLE9BQU8sR0FBUCxJQUFjLENBQWQs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WUksS0FBWixDQUFoQixDQUFkO0FBQ0QsR0FGRDs7QUFJQSxTQUFPO0FBQ0xMLG1CQUFlQSxhQURWO0FBRUxELGNBQVVBO0FBRkwsR0FBUDtBQUlEO0FBQ0RRLE9BQU9DLE9BQVAsR0FBaUI7QUFDZlosa0JBQWdCQSxjQUREO0FBRWZsQixlQUFhQTtBQUZFLENBQWpCIiwiZmlsZSI6ImRhdGVUaW1lUGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2l0aERhdGEocGFyYW0pe1xuICByZXR1cm4gcGFyYW0gPCAxMCA/ICcwJyArIHBhcmFtIDogJycgKyBwYXJhbTtcbn1cbmZ1bmN0aW9uIGdldExvb3BBcnJheShzdGFydCxlbmQpe1xuICB2YXIgc3RhcnQgPSBzdGFydCB8fCAwO1xuICB2YXIgZW5kID0gZW5kIHx8IDE7XG4gIHZhciBhcnJheSA9IFtdO1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpKyspIHtcbiAgICBhcnJheS5wdXNoKHdpdGhEYXRhKGkpKTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5mdW5jdGlvbiBnZXRNb250aERheSh5ZWFyLG1vbnRoKXtcbiAgdmFyIGZsYWcgPSB5ZWFyICUgNDAwID09IDAgfHwgKHllYXIgJSA0ID09IDAgJiYgeWVhciAlIDEwMCAhPSAwKSwgYXJyYXkgPSBudWxsO1xuICBzd2l0Y2ggKG1vbnRoKSB7XG4gICAgY2FzZSAnMDEnOlxuICAgIGNhc2UgJzAzJzpcbiAgICBjYXNlICcwNSc6XG4gICAgY2FzZSAnMDcnOlxuICAgIGNhc2UgJzA4JzpcbiAgICBjYXNlICcxMCc6XG4gICAgY2FzZSAnMTInOlxuICAgICAgYXJyYXkgPSBnZXRMb29wQXJyYXkoMSwgMzEpXG4gICAgICBicmVhaztcbiAgICBjYXNlICcwNCc6XG4gICAgY2FzZSAnMDYnOlxuICAgIGNhc2UgJzA5JzpcbiAgICBjYXNlICcxMSc6XG4gICAgICBhcnJheSA9IGdldExvb3BBcnJheSgxLCAzMClcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJzAyJzpcbiAgICAgIGFycmF5ID0gZmxhZyA/IGdldExvb3BBcnJheSgxLCAyOSkgOiBnZXRMb29wQXJyYXkoMSwgMjgpXG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYXJyYXkgPSAn5pyI5Lu95qC85byP5LiN5q2j56Gu77yM6K+36YeN5paw6L6T5YWl77yBJ1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cbmZ1bmN0aW9uIGdldE5ld0RhdGVBcnJ5KCl7XG4gIC8vIOW9k+WJjeaXtumXtOeahOWkhOeQhlxuICB2YXIgbmV3RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHZhciB5ZWFyID0gd2l0aERhdGEobmV3RGF0ZS5nZXRGdWxsWWVhcigpKSxcbiAgICAgIG1vbnQgPSB3aXRoRGF0YShuZXdEYXRlLmdldE1vbnRoKCkgKyAxKSxcbiAgICAgIGRhdGUgPSB3aXRoRGF0YShuZXdEYXRlLmdldERhdGUoKSksXG4gICAgICBob3VyID0gd2l0aERhdGEobmV3RGF0ZS5nZXRIb3VycygpKSxcbiAgICAgIG1pbnUgPSB3aXRoRGF0YShuZXdEYXRlLmdldE1pbnV0ZXMoKSksXG4gICAgICBzZWNvID0gd2l0aERhdGEobmV3RGF0ZS5nZXRTZWNvbmRzKCkpO1xuIFxuICByZXR1cm4gW3llYXIsIG1vbnQsIGRhdGUsIGhvdXIsIG1pbnUsIHNlY29dO1xufVxuZnVuY3Rpb24gZGF0ZVRpbWVQaWNrZXIoc3RhcnRZZWFyLGVuZFllYXIsZGF0ZSkge1xuICAvLyDov5Tlm57pu5jorqTmmL7npLrnmoTmlbDnu4TlkozogZTliqjmlbDnu4TnmoTlo7DmmI5cbiAgdmFyIGRhdGVUaW1lID0gW10sIGRhdGVUaW1lQXJyYXkgPSBbW10sW10sW10sW10sW10sW11dO1xuICB2YXIgc3RhcnQgPSBzdGFydFllYXIgfHwgMTk3ODtcbiAgdmFyIGVuZCA9IGVuZFllYXIgfHwgMjEwMDtcbiAgLy8g6buY6K6k5byA5aeL5pi+56S65pWw5o2uXG4gIHZhciBkZWZhdWx0RGF0ZSA9IGRhdGUgPyBbLi4uZGF0ZS5zcGxpdCgnICcpWzBdLnNwbGl0KCctJyksIC4uLmRhdGUuc3BsaXQoJyAnKVsxXS5zcGxpdCgnOicpXSA6IGdldE5ld0RhdGVBcnJ5KCk7XG4gIC8vIOWkhOeQhuiBlOWKqOWIl+ihqOaVsOaNrlxuICAvKuW5tOaciOaXpSDml7bliIbnp5IqLyBcbiAgZGF0ZVRpbWVBcnJheVswXSA9IGdldExvb3BBcnJheShzdGFydCxlbmQpO1xuICBkYXRlVGltZUFycmF5WzFdID0gZ2V0TG9vcEFycmF5KDEsIDEyKTtcbiAgZGF0ZVRpbWVBcnJheVsyXSA9IGdldE1vbnRoRGF5KGRlZmF1bHREYXRlWzBdLCBkZWZhdWx0RGF0ZVsxXSk7XG4gIGRhdGVUaW1lQXJyYXlbM10gPSBnZXRMb29wQXJyYXkoMCwgMjMpO1xuICBkYXRlVGltZUFycmF5WzRdID0gZ2V0TG9vcEFycmF5KDAsIDU5KTtcbiAgZGF0ZVRpbWVBcnJheVs1XSA9IGdldExvb3BBcnJheSgwLCA1OSk7XG4gXG4gIGRhdGVUaW1lQXJyYXkuZm9yRWFjaCgoY3VycmVudCxpbmRleCkgPT4ge1xuICAgIGRhdGVUaW1lLnB1c2goY3VycmVudC5pbmRleE9mKGRlZmF1bHREYXRlW2luZGV4XSkpO1xuICB9KTtcbiBcbiAgcmV0dXJuIHtcbiAgICBkYXRlVGltZUFycmF5OiBkYXRlVGltZUFycmF5LFxuICAgIGRhdGVUaW1lOiBkYXRlVGltZVxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGF0ZVRpbWVQaWNrZXI6IGRhdGVUaW1lUGlja2VyLFxuICBnZXRNb250aERheTogZ2V0TW9udGhEYXlcbn1cbiJdfQ==