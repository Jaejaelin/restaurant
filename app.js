/* 처음에 advertise 이미지만 페이드인 효과 주려고 했을때 작성한 코드.
const adPic = document.querySelector(".ad_Pic");

function fadeIn() { // 이미지를 페이드 인하는 함수를 정의
    adPic.classList.add("fadeIn");
}

// 스크롤 이벤트를 사용하여 페이드 인 효과 활성화
window.addEventListener('scroll', () => {
    const elementTop = adPic.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop <= windowHeight - 200) { // 만약 이미지의 현재 위치가 화면 아래 200px 내에 있다면 아래 코드를 실행
        fadeIn(); // fadeIn 함수를 호출하여 이미지를 페이드 인
        window.removeEventListener('scroll', fadeIn);// 이미지가 한 번 나타나면 스크롤 이벤트 제거
    }
});

*/

const elements = document.querySelectorAll(".ad_Pic, .introText h2, .introText p, .timeTableWrap p, .info p, .info img");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => { //Intersection Observer의 콜백 함수
    if (entry.isIntersecting) { //요소와 뷰포트가 교차하는지 여부
      entry.target.classList.add("fadeIn");
      observer.unobserve(entry.target); // 한 번만 페이드 인되도록 감시 해제
    }
  });
}, { threshold: 0.2 }); //요소의 상단에서 100px 아래 부분과 교차하는 순간에 실행하도록

elements.forEach((element) => {
  observer.observe(element);
});