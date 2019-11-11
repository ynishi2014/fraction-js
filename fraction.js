  var fraction = {}
  fraction.gcd = function (x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  fraction.reduce = function (num) {
    var gcdNum = gcd(num[0], num[1]);
    return [num[0] / gcdNum, num[1] / gcdNum];
  }
  fraction.mul = function (num1, num2) {
    return reduce([num1[0] * num2[0], num1[1] * num2[1]]);
  }
  fraction.div = function (num1, num2) {
    return reduce([num1[0] * num2[1], num1[1] * num2[0]]);
  }
  fraction.add = function (num1, num2) {
    return reduce([num1[0] * num2[0], num1[0] * num2[1] + num2[0] * num1[1]]);
  }
  fraction.tofrac = function (n) {
    return [1, n];
  }
  fraction.toDouble = function (num) {
    return num[1] / num[0];
  }
