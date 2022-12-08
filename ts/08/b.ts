const input = await Deno.readTextFile("../../input/08.txt");
const lines = input.split("\n");
const grid = lines.map((line) => line.split("").map(Number));

const getScenicScore = (rowIdx: number, colIdx: number) => {
  const cellValue = grid[rowIdx][colIdx];

  let topScore = 0;
  for (let i = rowIdx - 1; i >= 0; i--) {
    topScore++;
    if (grid[i][colIdx] >= cellValue) break;
  }

  let bottomScore = 0;
  for (let i = rowIdx + 1; i < grid.length; i++) {
    bottomScore++;
    if (grid[i][colIdx] >= cellValue) break;
  }

  let leftScore = 0;
  for (let i = colIdx - 1; i >= 0; i--) {
    leftScore++;
    if (grid[rowIdx][i] >= cellValue) break;
  }

  let rightScore = 0;
  for (let i = colIdx + 1; i < grid[rowIdx].length; i++) {
    rightScore++;
    if (grid[rowIdx][i] >= cellValue) break;
  }

  return topScore * bottomScore * leftScore * rightScore;
};

const scenicScores = grid.map((row, rowIdx) =>
  row.map((_, colIdx) => getScenicScore(rowIdx, colIdx))
);

const max = Math.max(...scenicScores.flat());
console.log(max);
