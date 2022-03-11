export default function initType() {
  function typeWriter(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letra, i) => {
      setTimeout(() => {
        element.innerHTML += letra;
      }, 75 * i);
    });
  }
  const titulo = document.querySelector('h1');

  typeWriter(titulo);
}
