function solution(my_string, is_prefix) {
  var answer = 0;
  let aa = '';
  for (let i = 0; i < my_string.length; i++) {
    aa += my_string[i];

    if (aa === is_prefix) {
      answer = 1;
    }
  }
  return answer;
}

console.log(solution('banana', 'ban'));
