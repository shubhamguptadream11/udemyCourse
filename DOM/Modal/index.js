const showModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');

const openModal = function(){
    console.log('Hey');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const close = ()=>{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i=0;i<showModal.length;i++)
    showModal[i].addEventListener('click',openModal);

overlay.addEventListener('click',close);

closeModal.addEventListener('click',close);

document.addEventListener('keydown',(e)=>{
    if(e.key === 'Escape' && !modal.classList.contains('hidden'))
        close();
})
