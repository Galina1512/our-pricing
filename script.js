const btn1 = document.querySelector('.switch-right');
const btn2 = document.querySelector('.switch-left');
const anns = document.querySelectorAll('.ann');
const mons = document.querySelectorAll('.mon');

btn1.addEventListener('click', ()=>{
    btn1.style.display='none';
    btn2.style.display='flex';

    anns.forEach(ann => {
        ann.style.display='none';
    })
    mons.forEach(mon =>{
        mon.style.display='block';
    })
})
btn2.addEventListener('click', ()=>{
    btn2.style.display='none';
    btn1.style.display='flex';

    anns.forEach(ann => {
        ann.style.display='block';
    })
    mons.forEach(mon =>{
        mon.style.display='none';
    })
})