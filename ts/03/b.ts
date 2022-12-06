const input = await Deno.readTextFile("../../input/03.txt");

const rucksacks = input.split("\n");

let score = 0;

for (let i = 0; i < rucksacks.length; i += 3) {
  const one = rucksacks[i];
  const two = rucksacks[i + 1];
  const three = rucksacks[i + 2];

  const inAll = one
    .split("")
    .filter((c) => two.includes(c) && three.includes(c))
    .pop();

  // a-z 1-26, A-Z 27-52
  if (inAll) {
    const charCode = inAll.charCodeAt(0);
    score += charCode > 96 ? charCode - 96 : charCode - 38;
  }
}

console.log(score);
