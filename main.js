import './style.css';

const totalPorcento = document.querySelector('[data-js="totalPorcento"]');
let meuPorcento = document.querySelector('[data-js="meuPorcento"]');
const result = document.querySelector('[data-js="result"]');
const form = document.querySelector('#form');
const btnReset = document.querySelector('[data-js="btnReset"]');
const modal = document.querySelector('[data-js="modal"]');
form.addEventListener('submit', (e) =>{
  e.preventDefault();
    const resultPorcentos = (Number(meuPorcento.value) * 100) / Number(totalPorcento.value)
    result.value = resultPorcentos.toFixed(2)
  if (!resultPorcentos) {
    modal.classList.remove("hidden")
    // alert('Preencha os campos')
    result.value = ''
  }
})

window.addEventListener('click',function(event){
  if(event.target != modal && event.target.parentNode != modal){
    modal.classList.add("hidden")
  }
});


btnReset.addEventListener('click', (e) => {
  e.preventDefault();
  totalPorcento.value = '';
  meuPorcento.value = ''
  result.value = ''
})
