const today = new Date();

const todayY = today.getFullYear().toString();
const todayM = (today.getMonth() + 1).toString();
const todayD = today.getDate().toString();


console.log(todayY + '年' + todayM  + '月' + todayD + '日');