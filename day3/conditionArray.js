function solution(arr, k) {
  const answer = arr.map((v) => {
    if (k % 2 === 0) {
      return v + k;
    } else {
      return v * k;
    }
  });

  return answer;
}

console.log(solution([1, 2, 3, 100, 99, 98], 3));
