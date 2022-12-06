const input = await Deno.readTextFile("../../input/05.txt");

const [crates, moves] = input.split("\n\n");

const horizontal = crates.split("\n").map((l) =>
  // element 1, 5, 9, ...
  l.split("").filter((_, i) => i % 4 === 1)
);
horizontal.pop(); // pop numbers at the end

const stacks: string[][] = [];
horizontal.reverse().forEach((h) => {
  h.forEach((c, i) => {
    if (!stacks[i]) {
      stacks[i] = [];
    }
    if (c !== " ") stacks[i].push(c);
  });
});

const movesList = moves
  .split("\n")
  .map((l) => l.split(" "))
  .map((l) => ({
    amount: Number(l[1]),
    from: Number(l[3]) - 1, // 0 indexed
    to: Number(l[5]) - 1, // 0 indexed
  }));

movesList.forEach((m) => {
  const crates = stacks[m.from].splice(-m.amount);
  stacks[m.to].push(...crates);
});

const word = stacks.map((s) => s.pop()).join("");
console.log(word);
