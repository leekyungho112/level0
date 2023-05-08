function solution(n, control) {
  for (let i = 0; i < control.length; i++) {
    switch (control[i]) {
      case 'w':
        n = n + 1;

        break;
      case 's':
        n = n - 1;
        break;
      case 'd':
        n = n + 10;
        break;
      default:
        n = n - 10;
    }
  }

  return n;
}

console.log(solution(0, 'wsdawsdassw'));
