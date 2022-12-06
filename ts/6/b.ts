const input = await Deno.readTextFile("../../input/6.txt");

const lastFour = [input[0], input[1], input[2]];

for (let i = 3; i < input.length; i++) {
  const letter = input[i];

  lastFour.push(letter);
  if (lastFour.length > 14) lastFour.shift();
  const set = new Set(lastFour);

  if (set.size === 14) {
    console.log(i + 1);
    break;
  }
}
