// ||는 첫번째 truthy를 반환한다.
// 즉, math가 존재하면 math를 할당하고, math가 존재하지 않으면 빈객체를 할당함.
var math = math || {};

// IIFE (즉시 실행 함수)
(function() {
  function sum(a,b) {
    return a+b;
  }
  // 외부에서 쓸 수 있게 전역 space인 math에 할당
  math.sum = sum;
})();
