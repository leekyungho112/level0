// n의 배수
function solution(num, n) {
  //num을 n으로 나눈 몫이 0이라면 1 아니라면 0
  if (num % n === 0) {
    return 1;
  } else {
    return 0;
  }
}

console.log(solution(98, 2));
