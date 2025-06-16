const numbers = [10, 20, 30, -5, 99];

export function getNumbers() {
  // 50% of the time the database goes down
  if (Math.random() < 0.5) {
    throw Error("Database went down! :(");
  }

  return numbers;
}

export function addNumber(num) {
  numbers.push(num);
}
