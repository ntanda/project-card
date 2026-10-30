console.log('hello world!');
const btn_text = document.getElementById('btn');
const text = document.querySelector('p');

btn_text.addEventListener('click', (e)=>{
    text.style.display = 'none';
    e.target.textContent = 'Mostra testo';
})