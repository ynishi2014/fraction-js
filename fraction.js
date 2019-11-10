function gcd(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
function reduce(num){
  var gcdNum = gcd(num[0], num[1]);
  return [num[0]/gcdNum, num[1]/gcdNum];
}
function mul(num1, num2){
  return reduce([num1[0]*num2[0], num1[1]*num2[1]]);
}
function div(num1, num2){
  return reduce([num1[0]*num2[1], num1[1]*num2[0]]);
}
function add(num1, num2){
  return reduce([num1[0]*num2[0], num1[0]*num2[1] + num2[0] * num1[1]]);
}
function tofrac(n){
  return [1,n];
}
function toDouble(num){
  return num[1] / num[0];
}
