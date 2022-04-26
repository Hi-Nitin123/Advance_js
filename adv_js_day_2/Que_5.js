var somelist = [];
for (let i = 0; i < 100000; i++) {
  somelist.push(i);
}

var nextItem = function () {
  var item = somelist.pop();

  if (item) {
    console.log(item);

    setTimeout(nextItem, 1000);
  }
};
nextItem();

//This problem can be solved by using a timeout function
