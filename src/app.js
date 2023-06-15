/*
import * as math from './math.js'; // [방법1] 모든 export를 math라는 객체로 가져오기
import { sum } from './math.js'; // [방법2] sum함수만 가져오기
*/

import * as math from './math.js';

console.log(math.sum(1,2));


import * as math1 from './math.js'; 
import * as math2 from './math.js'; 

import { sum } from './math1.js'; 
import { sum } from './math2.js';