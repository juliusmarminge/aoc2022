fn pt1(input: &str) {
    let max = input
        .split("\n\n")
        .map(|group| {
            group
                .split("\n")
                .map(str::parse::<i32>)
                .filter_map(Result::ok)
                .sum::<i32>()
        })
        .max()
        .unwrap();

    println!("[1]: {}", max);
}

fn pt2(input: &str) {
    let mut amounts = input
        .split("\n\n")
        .map(|group| {
            group
                .split("\n")
                .map(str::parse::<i32>)
                .filter_map(Result::ok)
                .sum::<i32>()
        })
        .collect::<Vec<i32>>();
    amounts.sort_by(|a, b| b.cmp(a));

    let sum = amounts.iter().take(3).sum::<i32>();

    println!("[2]: {}", sum);
}

fn main() {
    let input = include_str!("../../../input/1.txt");

    pt1(input);
    pt2(input);
}
