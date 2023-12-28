//console.log("Hello nodejs package");

// 외부 패키지 모듈은 경로를 명시하지 않아도 된다
const randomColor = require('randomcolor');

let color1 = randomColor();
let color2 = randomColor();
let color3 = randomColor();


console.log(color1, color2, color3);