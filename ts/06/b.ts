const input = await Deno.readTextFile("../../input/06.txt");

for (let i = 13; i < input.length; i++) {
  const lastFourteen = input.slice(i - 14, i);
  const set = new Set(lastFourteen);

  if (set.size === 14) {
    console.log(i);
    break;
  }
}
