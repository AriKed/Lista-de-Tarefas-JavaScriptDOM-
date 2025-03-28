// Neste primeiro bloco adicionei um evento para o programa dectar os cliques do usuário, sem ele o usuário não poderia adiconar uma tarefa.
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("adicionar").addEventListener("click", addFun); 
  
/*Neste segundo bloco adicionei outro evento para ser possível o usuário adicionar uma tarefa pressionando a tecla "Enter".
SE a condição "Apertar a tecla Enter" for detectada, uma nova tarefa será adicionada.*/
  document.getElementById("nova-tarefa").addEventListener("keypress", function(event) { //"keypress" é um evento de teclado.
      if (event.key === "Enter") {
          addFun(); // Função que é chamada caso a tecla Enter seja presscionada.
      }
  });
});

// Esta primeira parte recebe a entrada do usuário, no espaço que recebe uma nova tarefa.
function addFun() {
  const input = document.getElementById("nova-tarefa");
  const funText = input.value.trim(); //"trim" função que remove espaços no começo e fim da frase.

// Equanto que a segunda parte é responsável por impedir que um campo vazio seja adicionado a lista de tarefas.  
  if (funText === "") {
      alert("O campo está vazio...");
      return;
  }

  const ul = document.getElementById("lista-tarefas"); // Obtém o elemento <ul> onde as tarefas serão adicionadas.
  const li = document.createElement("li");// Cria o elemento "tarefa".

  const tarefaTexto = document.createElement("span"); // Armazena a String.
  tarefaTexto.textContent = funText;
  li.appendChild(tarefaTexto);

  // Mais um evento que detecta ações do usuário, desta vez é um evento de duplo clique, para riscar o item da lista.
  li.ondblclick = function () { 
      tarefaTexto.classList.toggle('done'); // Elementos da classe "done" são alterados conforme estilizei.
  };

  // Parte do código onde é criado o botão para remover uma tarefa
  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "Remover"; // Onde fica a escrita do botão, no caso "Remover".
  botaoRemover.classList.add("remover"); // Adiciona a classe "remover" ao botão.
  botaoRemover.onclick = function () { // Evento que verifica o clique e remove
      ul.removeChild(li); // Remove o que foi adicionado em "li".
  };

  // Cria a <div> que agrupa o botão "remover"
  const buttonContainer = document.createElement("div");
  buttonContainer.appendChild(botaoRemover);
  li.appendChild(buttonContainer);

  ul.appendChild(li); // Adiciona <li> à <ul>.
  input.value = ""; // Limpa o campo após a tarefa ser enviada.
}
