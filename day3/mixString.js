//문자열 섞기

function solution(str1, str2) {
  let mixStr = '';
  for (let i = 0; i < str1.length; i++) {
    mixStr += str1[i] + str2[i];
  }
  return mixStr;
}

console.log(solution('aaaaa', 'bbbbb'));
