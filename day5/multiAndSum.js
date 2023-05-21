function solution(num_list) {
  let sum = 0;
  let gob = 1;
  for (let i = 0; i < num_list.length; i++) {
    sum += num_list[i];
    gob = num_list[i] * gob;
  }

  if (sum * sum > gob) {
    return 1;
  } else {
    return 0;
  }
}

console.log(solution([3, 4, 5, 2, 1]));
