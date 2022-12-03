const input = await Deno.readTextFile("../../input/2.txt");

const games = input.split("\n").map((e) => e.split(" "));

console.log(games);
let score = 0;

games.forEach((game) => {
  const [elf, result] = game;

  if (elf === "A" && result === "X") {
    score += 3 + 0;
  } else if (elf === "A" && result === "Y") {
    score += 1 + 3;
  } else if (elf === "A" && result === "Z") {
    score += 2 + 6;
  } else if (elf === "B" && result === "Y") {
    score += 2 + 3;
  } else if (elf === "B" && result === "Z") {
    score += 3 + 6;
  } else if (elf === "B" && result === "X") {
    score += 1 + 0;
  } else if (elf === "C" && result === "Z") {
    score += 1 + 6;
  } else if (elf === "C" && result === "X") {
    score += 2 + 0;
  } else if (elf === "C" && result === "Y") {
    score += 3 + 3;
  }
});

console.log("answer", score);
