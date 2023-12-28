// 계산 기능을 하는 파일 = 계산 모듈

const add = (a, b) => a + b;
const sub = (a, b) => a - b;

module.exports = {
    moduleName: "calc module",
    add: add,
    sub: sub,
};  // 계산 모듈 객체 내보내기