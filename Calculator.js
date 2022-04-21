<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Your</h1>
  </body>
  <script>
    function calc() {
      this.read = function () {
        this.x = prompt("Enter the 1st number:");
        this.y = prompt("Enter the 2nd number");
      };
      this.sum = function () {
        return Number(this.x) + Number(this.y);
      };
      this.mul = function () {
        return this.x * this.y;
      };
    }

    const mycal = new calc();
    mycal.read();
    console.log("The sum is", mycal.sum());
    console.log("The mul is", mycal.mul());
  </script>
</html>
