var input = document.getElementById('tarefa');
var botao = document.getElementById('adicionar');
var lista = document.getElementById('lista');

function adicionarTarefa() {
  var texto = input.value;
  if (texto.length === 0) {
    return;
  }

  var li = document.createElement('li');
  li.textContent = texto;

  lista.appendChild(li);

  input.value = '';
  input.focus();
}

botao.addEventListener('click', adicionarTarefa);

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    adicionarTarefa();
  }
});

lista.addEventListener('click', function (evento) {
  var alvo = evento.target;
  if (alvo && alvo.tagName === 'LI') {
    alvo.remove();
  }
});
