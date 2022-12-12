const input = await Deno.readTextFile("../../input/12.txt");

let start = [0, 0] as [number, number],
  end = [0, 0] as [number, number];

const grid = input.split("\n").map((line, row) =>
  line.split("").map((char, col) => {
    if (char === "S") {
      start = [row, col];
      return 0;
    }
    if (char === "E") {
      end = [row, col];
      return "z".charCodeAt(0) - 97;
    }
    return char.charCodeAt(0) - 97;
  })
);

const visited = new Set<string>();

const queue = [start];
let steps = 0;

while (queue.length) {
  const next = [] as [number, number][];

  for (const [row, col] of queue) {
    const key = `${row},${col}`;
    if (visited.has(key)) continue;
    visited.add(key);

    if (row === end[0] && col === end[1]) {
      console.log("answer", steps);
      Deno.exit();
    }

    const elev = grid[row][col];

    if (grid[row - 1]?.[col] - elev < 2) next.push([row - 1, col]);
    if (grid[row + 1]?.[col] - elev < 2) next.push([row + 1, col]);
    if (grid[row][col - 1] - elev < 2) next.push([row, col - 1]);
    if (grid[row][col + 1] - elev < 2) next.push([row, col + 1]);
  }

  steps++;
  queue.splice(0, queue.length, ...next);
}

console.log("no path found");
