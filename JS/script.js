// DATASET

// Adicone um atributo data-anime="show-down" e data-anime = "show-right"
// a todos as section's com descrição dos animais

// Utilizando estes atributos, adicione a classe sho-down ou show-right a
// sua respectiva section assim que a mesma aparecer na tela (animacao tab)

// No CSS faça com que show-down anime de cimka para baixo e show-right
// continue com a mesma animação da esquerda para a direita

// Substitua todas as classes js- por data atributes

// (tudo modificado e adicionado no index.html, animacoes.js e syle.css)

// MODULES (criando módulos das animações para facilitar importar e exportar)

import initScrollSuave from './modules/scroll-suave.js';
import initAnimaScroll from './modules/scroll-animacao.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import initType from './modules/typeWritter.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initiFetchAnimais from './modules/fetchAnimais.js';
import initiFetchBitcoin from './modules/fetchBitcoin.js';

initScrollSuave();
initAnimaScroll();
initAccordion();
initTabNav();
initType();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initiFetchAnimais();
initiFetchBitcoin();