const input = await Deno.readTextFile("../../input/03.txt");

const rucksacks = input.split("\n");

let score = 0;

rucksacks.forEach((r) => {
  const [one, two] = [r.slice(0, r.length / 2), r.slice(r.length / 2)];
  const inBoth = one
    .split("")
    .filter((c) => two.includes(c))
    .pop();

  // a-z 1-26, A-Z 27-52
  if (inBoth) {
    const charCode = inBoth.charCodeAt(0);
    score += charCode > 96 ? charCode - 96 : charCode - 38;
  }
});

console.log(score);
