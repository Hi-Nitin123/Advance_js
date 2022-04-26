function array_operation(list) {
  new Promise((res, rej) => {
    if (Array.isArray(list)) {
      res(list);
    } else {
      rej("Error!");
    }
  })
    .then((list) => {
      console.log(makeallCaps(list));
      return list;
    })
    .then((list) => {
      console.log(sortWords(list));
    })
    .catch((val) => {
      console.log(val);
    });

  function makeallCaps(li) {
    return li.map((ele) => {
      return ele[0].toUpperCase() + ele.slice(1, ele.length);
    });
  }
  function sortWords(list) {
    return list.sort();
  }
}
array_operation(["seb", "aam", "papita"]);
