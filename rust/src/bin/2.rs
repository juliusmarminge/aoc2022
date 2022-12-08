use std::collections::HashMap;

fn pt1(input: &str) {
    let map = HashMap::from([
        ("A X", 1 + 3), // rock rock
        ("A Y", 2 + 6), // rock paper
        ("A Z", 3 + 0), // rock scissors
        ("B X", 1 + 0), // paper rock
        ("B Y", 2 + 3), // paper paper
        ("B Z", 3 + 6), // paper scissors
        ("C X", 1 + 6), // scissors rock
        ("C Y", 2 + 0), // scissors paper
        ("C Z", 3 + 3), // scissors scissors
    ]);

    let mut score = 0;
    input.split("\n").for_each(|line| {
        let mut iter = line.split(" ");
        let a = iter.next().unwrap();
        let b = iter.next().unwrap();

        score += map.get(format!("{} {}", a, b).as_str()).unwrap();
    });

    println!("1: {}", score);
}

// fn pt2(input: &str) {}

fn main() {
    let input = include_str!("../../../input/02.txt");

    pt1(input);
    // pt2(input);
}
