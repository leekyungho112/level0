function solution(my_string, alp) {
  var answer = '';

  for (var i = 0; i < my_string.length; i++) {
    if (my_string[i] === alp) {
      answer += alp.toUpperCase(); // 대문자로 변환하여 answer에 추가
    } else {
      answer += my_string[i]; // 원래 문자열의 글자를 answer에 추가
    }
  }

  return answer;
}
console.log(solution('programmers', 'p'));
