/*
  import * as math from './math.js'; // [방법1] 모든 export를 math라는 객체로 가져오기
  import { sum } from './math.js'; // [방법2] sum함수만 가져오기
*/
// import * as math from './math.js';

// console.log(math.sum(1,2));

/*
  웹팩의 loader를 사용하면, css코드를 js코드로 가져와서 사용할 수 있다
*/

import './app.css';
