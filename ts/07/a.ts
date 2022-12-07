const input = await Deno.readTextFile("../../input/07.txt");

const lines = input.split("\n");

type Dir = {
  parent: Dir | null;
  dirs: Record<string, Dir>;
  files: Record<string, number>;
};
const fs: Dir = { parent: null, dirs: {}, files: {} };
let current = fs;

for (const line of lines) {
  const parts = line.split(" ");
  if (parts[0] === "$") {
    // command
    if (parts[1] === "cd") {
      const dir = parts[2];
      if (dir === "..") {
        // go back up
        current = current.parent!;
      } else if (dir === "/") {
        // go to root
        current = fs;
      } else {
        // go to dir
        if (!current.dirs[dir]) {
          current.dirs[dir] = { parent: current, dirs: {}, files: {} };
        }
        current = current.dirs[dir];
      }
    } else if (parts[1] === "ls") {
      // no-op
    }
  } else {
    // ls output
    const typeOrSize = parts[0];
    if (typeOrSize === "dir") {
      // no-op
    } else {
      const name = parts[1];
      current.files[name] = +typeOrSize;
    }
  }
}

const dirSizes: number[] = [];
const getDirSize = (dir: Dir) => {
  let size = 0;
  for (const file in dir.files) {
    size += dir.files[file];
  }
  for (const subdir in dir.dirs) {
    size += getDirSize(dir.dirs[subdir]);
  }
  dirSizes.push(size);
  return size;
};
getDirSize(fs);

const sumLessThan = (arr: number[], target: number) =>
  arr.reduce((acc, cur) => acc + (cur < target ? cur : 0), 0);

console.log(sumLessThan(dirSizes, 1e5));
