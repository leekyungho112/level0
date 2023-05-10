function solution(start, end) {
  let answer = [];

  for (let i = 0; i <= end - start; i++) {
    answer.push(start + i);
  }
  return answer;
}

console.log(solution(3, 10));
