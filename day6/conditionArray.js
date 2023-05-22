function solution(arr) {
  const arr2 = arr.map((v) => {
    if (v >= 50 && v % 2 === 0) {
      return v / 2;
    } else if (v <= 50 && v % 2 === 1) {
      return v * 2;
    } else {
      return v;
    }
  });
  return arr2;
}

console.log(solution([1, 2, 3, 100, 99, 98]));
