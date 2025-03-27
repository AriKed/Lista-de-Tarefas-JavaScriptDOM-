document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("adicionar").addEventListener("click", addFun);
  });

  const addFun = () => {
    const input = document.getElementById("nova-tarefa");
    const funText = input.value;

    if (funText == "") {
      alert("O campo está vazio...");
      return;
    }

    const ul = document.getElementById("lista-tarefas");
    const li = document.createElement("li");

    const tarefaTexto = document.createElement("span");
    tarefaTexto.textContent = funText;
    li.appendChild(tarefaTexto);

    li.ondblclick = function () {
      tarefaTexto.classList.toggle('done');
    };

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.classList.add("remover");
    botaoRemover.onclick = function () {
      ul.removeChild(li);
    };

    const buttonContainer = document.createElement("div");
    buttonContainer.appendChild(botaoRemover);
    li.appendChild(buttonContainer);

    ul.appendChild(li);
    input.value = "";
  };