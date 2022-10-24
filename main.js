import './style.css';

const totalPorcento = document.querySelector('[data-js="totalPorcento"]');
let meuPorcento = document.querySelector('[data-js="meuPorcento"]');
const result = document.querySelector('[data-js="result"]');
const form = document.querySelector('#form');
const btnReset = document.querySelector('[data-js="btnReset"]');

form.addEventListener('submit', (e) =>{
  e.preventDefault();
    const resultPorcentos = (Number(meuPorcento.value) * 100) / Number(totalPorcento.value)
    result.value = resultPorcentos.toFixed(2)
  if (!resultPorcentos) {
    alert('Preencha os campos')
    result.value = ''
  }
})

btnReset.addEventListener('click', (e) => {
  e.preventDefault();
  totalPorcento.value = '';
  meuPorcento.value = ''
  result.value = ''
})
