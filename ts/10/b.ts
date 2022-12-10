const input = await Deno.readTextFile("../../input/10.txt");

const lines = input.split("\n");

const trace: number[] = [];
for (let i = 0; i < lines.length; i++) {
  const [op, val] = lines[i].split(" ");
  trace.push(0);
  if (op === "addx") trace.push(parseInt(val));
}

// create 6x40 array, filled with " "
const [length, height] = [40, 6];
const grid = Array.from({ length: height }, () =>
  Array.from({ length }, () => " ")
);

// create the picture
let spritePos = 1;
trace.forEach((ins, index) => {
  // get 2d pos by linear indexing
  const x = index % length;
  const y = Math.floor(index / length);

  if (Math.abs(x - spritePos) <= 1) grid[y][x] = "#";

  spritePos += ins;

  if (x === length - 1) console.log(grid[y].join(""));
});
