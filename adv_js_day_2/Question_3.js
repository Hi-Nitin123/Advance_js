const MakeSleep = new Promise((res, rej) => {
  res();
}).then(() => {
  function Sleep() {
    setTimeout(() => {
      console.log("hello");
    }, 2000);
  }
  Sleep();
});
