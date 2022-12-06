const input = await Deno.readTextFile("../../input/01.txt");

const elves = input.split("\n\n").map((e) => e.split("\n"));

const topThree = [0, 0, 0];
elves.forEach((e) => {
  const sum = e.reduce((a, b) => a + Number(b), 0);
  if (sum > topThree[2]) {
    topThree[2] = sum;
    topThree.sort((a, b) => b - a);
  }
});

console.log("answer", topThree[2] + topThree[1] + topThree[0]);
