
const modal = document.getElementById("myModal");

const btn1 = document.querySelectorAll("#botoes-opcoes")[0];
const btn2 = document.querySelectorAll("#botoes-opcoes")[1];

const overlay= document.getElementById('overlay');


 function openModal() {
     modal.style.display='block'
     overlay.style.display = "block"
 }

function closeModal() {
  modal.style.display = 'none'
  overlay.style.display='none'
}


  overlay.addEventListener('click', closeModal);
    btn1.addEventListener('click', closeModal);
    btn2.addEventListener('click', closeModal);


