const wait = (i, ms) =>
  new Promise((resolve) => setTimeout(() => resolve(i), ms));

async function printNumbersUsingAsync() {
  for (let i = 0; i < 10; i++) {
    await wait(i, Math.random() * 1000);
    console.log(i);
  }
}

printNumbersUsingAsync();
