let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa() {
  let valorInput = input.value;

  if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    ++contador;

    let novoItem = ` <div id="${contador}" class="item">
    <div class="item-icone">
      <i class="mdi mdi-circle-outline"></i>
    </div>
    <div class="item-nome">
      ${valorInput}
    </div>
    <div class="item-botao">
      <button onclick="deletar(${contador})" class="delete"> <i class="mdi mdi-delete"></i>
      </button>
    </div>
  </div>`;
    //ADICIONAR ITEM
    main.innerHTML += novoItem;
    //LIMPAR O INPUT
    input.value = "";
    input.focus();
  }
}

function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
}

input.addEventListener("keyup", function (e) {
  //botao enter do teclado é o numero 13
  if (e.keyCode === 13) {
    e.preventDefault();
    btnAdd.click();
  }
});
