function solution(myString, pat) {
  const lowCase1 = myString.toLowerCase();
  const lowCase2 = pat.toLowerCase();
  const includes = lowCase1.includes(lowCase2);
  return includes ? 1 : 0;
}

console.log(solution('AbCdEfG', 'aBc'));
console.log(solution('aaAA', 'aaaaa'));
