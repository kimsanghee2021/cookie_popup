const btnView = document.querySelector('.view');
const btnDel = document.querySelector('.view');
const popup = document.querySelector('#popup');
const btnClose = popup.querySelector('.close');

setCookie('today','done',1);

//쿠키생성
function setCookie(name,val,day){
    const today = new Date();
    const date = today.getDate();
    today.setDate(date+day);
    const duedate = today.toGMTString();
    document.cookie = `${name}=${val}; path=/; expires=${duedate}`;
}
