function fact(n) {
  function closure_fact() {
    if (n === 0) {
      return 1;
    } else {
      return n * fact(n - 1);
    }
  }
  return closure_fact;
}
//let factorial = fact(5);
// console.log(fact(5));
const new_fun = fact(5);
console.log(new_fun());
