function solution(num_list) {
  if (num_list.length >= 11) {
    const sum = num_list.reduce((acc, cur) => acc + cur);
    return sum;
  } else {
    const sum = num_list.reduce((acc, cur) => acc * cur);
    return sum;
  }
}

console.log(solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]));
