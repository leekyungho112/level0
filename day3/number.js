// n보다 커질때까지 더하기

function solution(numbers, n) {
  let sum = 0;
  numbers.map((v) => {
    if (sum > n) {
      return sum;
    } else {
      sum += v;
    }
  });
  return sum;
}

console.log(solution([34, 5, 71, 29, 100, 34], 123));
