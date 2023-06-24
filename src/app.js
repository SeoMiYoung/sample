import './app.css';
import nyancat from './nyancat.jpg';

//DOMContentLoaded 이벤트가 발생했을 때, 즉 페이지의 DOM이 완전히 로드되었을 때 실행되는 콜백 함수를 등록합니다.
document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = `
    <img src="${nyancat}" />  
  `
})
