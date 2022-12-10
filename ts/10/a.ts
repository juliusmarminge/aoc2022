const input = await Deno.readTextFile("../../input/10.txt");
const lines = input.split("\n");

const trace: number[] = [];
for (let i = 0; i < lines.length; i++) {
  const [op, val] = lines[i].split(" ");
  trace.push(0);
  if (op === "addx") trace.push(parseInt(val));
}

let x = 1;
const prefixSum: number[] = [];
trace.forEach((amount, i) => {
  const instrCount = i + 1; // zero-based index
  if ((instrCount + 20) % 40 === 0) prefixSum.push(x * instrCount);
  x += amount;
});

const sum = prefixSum.reduce((a, b) => a + b, 0);
console.log(sum);
