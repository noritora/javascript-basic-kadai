const btn = document.getElementById('btn');

// setTimeout(() => {
//     btn.addEventListener('click', () => {
//         const textH2 = document.getElementById('text');
//         textH2.textContent = 'ボタンをクリックしました';
//     });    
// }, 2100);

btn.addEventListener('click', () => {
    const textH2 = document.getElementById('text');
    setTimeout(() => {
        textH2.textContent = 'ボタンをクリックしました';
    }, 2000);
});  