const input = await Deno.readTextFile("../../input/08.txt");
// const input = await Deno.readTextFile("test.txt");

const lines = input.split("\n");

const grid = lines.map((line) => line.split("").map(Number));

const visible = new Set();

const visibleOnRow = (rowIdx: number) => {
  const row = grid[rowIdx];
  let tallest = -1;

  for (let i = 0; i < row.length; i++) {
    const cell = row[i];
    if (cell > tallest) {
      visible.add(`${rowIdx},${i}`);
    }
    tallest = Math.max(tallest, cell);
  }

  // same from right to left
  tallest = -1;
  for (let i = row.length - 1; i >= 0; i--) {
    const cell = row[i];
    if (cell > tallest) {
      visible.add(`${rowIdx},${i}`);
    }
    tallest = Math.max(tallest, cell);
  }
};

const visibleOnCol = (colIdx: number) => {
  let tallest = -1;

  for (let i = 0; i < grid.length; i++) {
    const cell = grid[i][colIdx];
    if (cell > tallest) {
      visible.add(`${i},${colIdx}`);
    }
    tallest = Math.max(tallest, cell);
  }

  // same from bottom to top
  tallest = -1;
  for (let i = grid.length - 1; i >= 0; i--) {
    const cell = grid[i][colIdx];
    if (cell > tallest) {
      visible.add(`${i},${colIdx}`);
    }
    tallest = Math.max(tallest, cell);
  }
};

for (let i = 0; i < grid.length; i++) {
  visibleOnRow(i);
  visibleOnCol(i);
}

console.log("answer", visible.size);
