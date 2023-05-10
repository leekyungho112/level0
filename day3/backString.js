function solution(my_string, n) {
  const endIndex = my_string.length - n;
  return my_string.slice(endIndex, my_string.length);
}

console.log(solution('ProgrammerS123', 11));
