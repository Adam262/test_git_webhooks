var a = 5
b = -7

(function checkPositive(x) {
  if (x > 0) return true;
  return false
}(a))

var hash = { x:1, y:2 }
for (var key in hash) {
  console.log(hash[key])
}
