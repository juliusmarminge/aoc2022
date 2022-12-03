const input = await Deno.readTextFile("../../input/2.txt");

const games = input.split("\n").map((e) => e.split(" "));

console.log(games);
let score = 0;

games.forEach((game) => {
  const [elf, me] = game;
  if (elf === "A" && me === "X") {
    score += 1 + 3;
  } else if (elf === "A" && me === "Y") {
    score += 2 + 6;
  } else if (elf === "A" && me === "Z") {
    score += 3 + 0;
  } else if (elf === "B" && me === "Y") {
    score += 2 + 3;
  } else if (elf === "B" && me === "Z") {
    score += 3 + 6;
  } else if (elf === "B" && me === "X") {
    score += 1 + 0;
  } else if (elf === "C" && me === "Z") {
    score += 3 + 3;
  } else if (elf === "C" && me === "X") {
    score += 1 + 6;
  } else if (elf === "C" && me === "Y") {
    score += 2 + 0;
  }
});

console.log("answer", score);
