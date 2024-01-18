document.addEventListener("DOMContentLoaded", function () {
  const carrossel = document.getElementById("carrossel");
  const projetosCards = document.querySelectorAll(".projetos-cards");

  let currentIndex = 0;
  
  // Função para exibir o card na posição desejada
  function showCard(index) {
    // Itera sobre todos os cards
    projetosCards.forEach((card, i) => {
      const distance = Math.abs(index - i);
      const isCurrent = distance === 0;

      // Aplica a classe 'opaco' para os cartões não destacados
      card.classList.toggle("opaco", !isCurrent);
      // Ajusta a largura dos cartões
      card.style.width = isCurrent ? "40%" : "25%";
    });


  }
  // Função para avançar para o próximo card
  function nextCard() {
    currentIndex = (currentIndex + 1) % projetosCards.length;
    showCard(currentIndex);
  }

  // Configura um intervalo para avançar automaticamente a cada 3 segundos
  setInterval(nextCard, 3000);
});
