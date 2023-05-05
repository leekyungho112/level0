// 실수 에서 정수만을 뽑는 문제
// js에서 소수점을 정수로 반환하는 매서드로 floor(내림),ceil(올림),round(반올림)이 있다.
function solution(flo) {
  const int = Math.floor(flo);
  return int;
}

console.log(solution(69.32));
