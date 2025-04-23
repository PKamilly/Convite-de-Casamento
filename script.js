document.addEventListener("DOMContentLoaded", function () {
    const itens = document.querySelectorAll("li");
  
    // Carrega os itens riscados salvos no localStorage
    const riscadosSalvos = JSON.parse(localStorage.getItem("itensRiscados")) || [];
  
    itens.forEach(function (item, index) {
      // Se o item estiver na lista de riscados, aplica a classe
      if (riscadosSalvos.includes(index)) {
        item.classList.add("riscado");
      }
  
      item.addEventListener("click", function () {
        item.classList.toggle("riscado");
  
        // Atualiza a lista no localStorage
        const novosRiscados = [];
        itens.forEach((li, i) => {
          if (li.classList.contains("riscado")) {
            novosRiscados.push(i);
          }
        });
  
        localStorage.setItem("itensRiscados", JSON.stringify(novosRiscados));
      });
    });
  });
  
  