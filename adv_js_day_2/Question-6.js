/*for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 10);
}
*/

//This can be cured by replacing var through let

for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 10);
}
