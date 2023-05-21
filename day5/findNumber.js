function solution(num_list, n) {
  const find = num_list.find((v) => v === n);

  return find ? 1 : 0;
}

console.log(solution([1, 2, 3, 4, 5], 3));
