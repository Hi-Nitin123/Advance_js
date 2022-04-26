function testNum(n) {
  return new Promise(function (res, rej) {
    if (n > 10) {
      res("The number is greater than 10");
    } else {
      rej("The number is less than 10");
    }
  });
}

let mypromise = testNum(20);

mypromise.then(
  function (val) {
    console.log(val);
  },
  function (error) {
    console.log(error);
  }
);
