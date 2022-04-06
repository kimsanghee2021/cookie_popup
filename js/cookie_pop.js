const btnDel = document.querySelector('.del');
const btnView = document.querySelector('.view');
const popup = document.querySelector('#popup');
const btnClose = popup.querySelector('.close');
const isCookie = document.cookie.indexOf('today=done');
let isOn = '';
console.log(isCookie);

//브라우저 로딩시 쿠기 있으면 팝업을 숨기고 없으면 팝업 보임처리
isCookie === -1 ? (isOn = 'block') : (isOn = 'none');
popup.style.display = isOn;

//쿠키 삭제 이벤트
btnDel.addEventListener('click',function(e){
  e.preventDefault();
  setCookie('today','done',0);
  alert('쿠키를 삭제 했습니다.');
});

//쿠키 확인 이벤트 
btnView.addEventListener('click',function(e){
  e.preventDefault();
  alert(document.cookie);
});

//팝업 닫기 이벤트
btnClose.addEventListener('click',function(e){
  e.preventDefault();
  let isChecked = popup.querySelector('#ck').checked; //체크박스에 체크되어있을때 
  if(isChecked) setCookie('today','done',1); //체크박스에 체크 되어있을때 setCookie 함수 가 1로 변환

    //팝업닫기 
    new Anim(popup,{
      prop : 'opacity',
      value : 0,
      duration : 500,
      callback : ()=>{
        popup.style.display = 'none';
      }
    });
});






//쿠키생성함수 - 쿠키저장
function setCookie(name,val,day){
  const today = new Date();
  const date = today.getDate(); //오늘 날짜
  today.setDate(date+day);//변경된 시간을 기준으로 밀리초를 반환
  const daydate = today.toGMTString();
  document.cookie = `${name}=${val}; path=/; expires=${daydate}`;
  console.log(document.cookie);
}
