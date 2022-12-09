const input = await Deno.readTextFile("../../input/09.txt");
// const input = await Deno.readTextFile("test.txt");

const lines = input.split("\n");

const head = { x: 0, y: 0 };
const tail = { x: 0, y: 0 };

const tailVis = new Set([`${tail.x},${tail.y}`]);

lines.forEach((l) => {
  const [dir, _steps] = l.split(" ");
  const steps = parseInt(_steps);

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

    const dx = head.x - tail.x;
    const dy = head.y - tail.y;

    if (dx > 1) {
      tail.x++;
      if (dy) tail.y += dy > 0 ? 1 : -1;
    } else if (dx < -1) {
      tail.x--;
      if (dy) tail.y += dy > 0 ? 1 : -1;
    } else if (dy > 1) {
      tail.y++;
      if (dx) tail.x += dx > 0 ? 1 : -1;
    } else if (dy < -1) {
      tail.y--;
      if (dx) tail.x += dx > 0 ? 1 : -1;
    }

    tailVis.add(`${tail.x},${tail.y}`);
  }
});

console.log("answer", tailVis.size);
