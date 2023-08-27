async function createCards() {
    try {
      const response = await fetch('portfolios.json');
      const portfolios = await response.json();
  
      const portfolioGrid = document.getElementById("portfolio-grid");
  
      portfolios.forEach((portfolio, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.addEventListener("click", () => redirectToDetailPage(index)); // Adiciona o evento de clique
  
        const titleElement = document.createElement("div");
        titleElement.classList.add("foto");
        titleElement.innerHTML = marked(portfolio.title);
  
        const descriptionElement = document.createElement("div");
        descriptionElement.classList.add("nome");
        descriptionElement.innerHTML = marked(portfolio.description); // Renderiza o Markdown em HTML
  
        card.appendChild(titleElement);
        card.appendChild(descriptionElement);
  
        portfolioGrid.appendChild(card);
      });
    } catch (error) {
      console.error("Error reading portfolios JSON:", error);
    }
  }
  
  function redirectToDetailPage(index) {
    // Aqui você pode redirecionar para a página detalhada, passando o índice do portfólio como parâmetro
    window.location.href = `detail.html?index=${index}`;
  }
  
  createCards();  