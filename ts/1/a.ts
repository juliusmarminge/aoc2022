const input = await Deno.readTextFile("../../input/1.txt");

const elves = input.split("\n\n").map((e) => e.split("\n"));

let max = 0;
elves.forEach((e) => {
  const sum = e.reduce((a, b) => a + Number(b), 0);
  if (sum > max) {
    max = sum;
  }
});

console.log("answer", max);
