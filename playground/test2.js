// GitHub Packages에서 설치한 패키지를 불러옵니다.
const {add, sum,hi } = require('@yoojaemyeong/npmproejct1');

// 패키지에서 제공하는 기능 사용하기
console.log('3+4='+add(3,4));
console.log('1+2+3+4+5='+sum([1,2,3,4,5]));
hi();
