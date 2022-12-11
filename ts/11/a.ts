const input = await Deno.readTextFile("../../input/11.txt");
const monkeys = input.split("\n\n");

const parsed = monkeys.map((monkey) => {
  const lines = monkey.split("\n");
  const startingItems = lines[1]
    .split(" ")
    .splice(4)
    .map((item) => parseInt(item));
  const op = lines[2].split(" ").splice(3);
  const test = lines[3].split(" ").splice(3);
  const ifTrue = lines[4].split(" ").splice(6);
  const ifFalse = lines[5].split(" ").splice(6);

  return {
    startingItems,
    op,
    test,
    ifTrue,
    ifFalse,
  };
});

const inspectedTimes = Array.from({ length: parsed.length }, () => 0);

for (let i = 0; i < 10000; i++) {
  parsed.forEach((monkey, idx) => {
    while (monkey.startingItems.length) {
      inspectedTimes[idx]++;
      const item = monkey.startingItems.shift();

      const evalString = `${item} ${monkey.op[3]} ${
        monkey.op[4] === "old" ? item : monkey.op[4]
      }`;
      const res = Math.floor(eval(evalString) % 3);

      if (res % parseInt(monkey.test[2]) === 0) {
        const throwTo = parseInt(monkey.ifTrue[3]);
        parsed[throwTo].startingItems.push(res);
      } else {
        const throwTo = parseInt(monkey.ifFalse[3]);
        parsed[throwTo].startingItems.push(res);
      }
    }
  });
}

console.log(inspectedTimes);

// 2 most active
const mostActive = inspectedTimes
  .map((item, i) => ({ item, i }))
  .sort((a, b) => b.item - a.item)
  .slice(0, 2);

console.log("answer 1: ", mostActive[0].item * mostActive[1].item);
