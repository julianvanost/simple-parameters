const myFunction = function () {
  let a = 5;
  let b = 12;

  if (a % 2 == 0) {
    return a + b
  } else {
    return a - b
  }
}
let result = myFunction()
console.log(result)


const adder = function (a, b, c) {
  return a + b + c
}
console.log("Adder results (4 + 6) = " + adder(4, 6, 9))
console.log("Adder results (122 + 22) = " + adder(122, 22, 12))
console.log("Adder results (33 + 34) = " + adder(33, 34, 35))

const subtractor = function (a, b, c, d) {
  return a - b - c - d
}
console.log("Subtractor results (4 - 6) = " + subtractor(4, 6, 8, 10))
console.log("Subtractor results (122 - 22) = " + subtractor(122, 22, 12, 6))
console.log("Subtractor results (33 - 34) = " + subtractor(33, 34, 17, 9))