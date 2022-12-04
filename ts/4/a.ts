const input = await Deno.readTextFile("../../input/4.txt");

let sum = 0;

input.split("\n").forEach((l) => {
  const [one, two] = l.split(",");

  const [one1, one2] = one.split("-");
  const [two1, two2] = two.split("-");
  console.log(l, one1, one2, two1, two2);

  if (Number(one1) >= Number(two1) && Number(one2) <= Number(two2)) {
    sum++;
  } else if (Number(one1) <= Number(two1) && Number(one2) >= Number(two2)) {
    sum++;
  }
});

console.log("answer", sum);
