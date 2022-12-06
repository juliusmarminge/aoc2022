const input = await Deno.readTextFile("../../input/06.txt");

for (let i = 3; i < input.length; i++) {
  const lastFour = input.slice(i - 4, i);
  const set = new Set(lastFour);

  if (set.size === 4) {
    console.log(i);
    break;
  }
}
