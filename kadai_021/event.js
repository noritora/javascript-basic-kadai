const btn = document.getElementById('btn');

setTimeout(() => {
    btn.addEventListener('click', () => {
        const textH2 = document.getElementById('text');
        textH2.textContent = 'ボタンをクリックしました';
    });    
}, 2100);