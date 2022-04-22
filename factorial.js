function fact(n) {
  let x = n;
  function closure_fact(x) {
    if (x === 0) {
      return 1;
    } else {
      return x * fact(x - 1);
    }
  }
  return closure_fact;
}
let factorial = fact(5);
console.log(factorial);
