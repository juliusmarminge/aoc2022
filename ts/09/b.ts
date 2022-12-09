const input = await Deno.readTextFile("../../input/09.txt");
// const input = await Deno.readTextFile("test.txt");

const lines = input.split("\n");

const knots = [
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
];

const tailVis = new Set([`${knots[9].x},${knots[9].y}`]);

lines.forEach((l) => {
  const [dir, _steps] = l.split(" ");
  const steps = parseInt(_steps);

  const head = knots[0];

  for (let i = 0; i < steps; i++) {
    switch (dir) {
      case "U":
        head.y++;
        break;
      case "D":
        head.y--;
        break;
      case "L":
        head.x--;
        break;
      case "R":
        head.x++;
        break;
    }

    for (let i = 0; i < knots.length - 1; i++) {
      const dx = knots[i].x - knots[i + 1].x;
      const dy = knots[i].y - knots[i + 1].y;

      if (dx > 1) {
        knots[i + 1].x++;
        if (dy) knots[i + 1].y += dy > 0 ? 1 : -1;
      } else if (dx < -1) {
        knots[i + 1].x--;
        if (dy) knots[i + 1].y += dy > 0 ? 1 : -1;
      } else if (dy > 1) {
        knots[i + 1].y++;
        if (dx) knots[i + 1].x += dx > 0 ? 1 : -1;
      } else if (dy < -1) {
        knots[i + 1].y--;
        if (dx) knots[i + 1].x += dx > 0 ? 1 : -1;
      }

      const tail = knots[knots.length - 1];
      tailVis.add(`${tail.x},${tail.y}`);
    }
  }
});

console.log("answer", tailVis.size);
