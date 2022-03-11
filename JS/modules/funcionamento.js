export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number); // map sendo usando para transformar a array em uma array de numeros

  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number); // map sendo usando para transformar a array em uma array de numeros

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}

// const agora = new Date();
// const futuro = new Date('Dec 24 2022 23:59');

// function transformarDias (tempo){
//   return tempo /(24 * 60 * 60 * 1000);
// }

// const diasAgora = transformarDias(agora.getTime());
// const diasFuturo = transformarDias(futuro.getTime());

// console.log(Math.floor(diasFuturo - diasAgora));
