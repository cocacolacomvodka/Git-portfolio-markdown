async function loadDetailContent() {
    const urlParams = new URLSearchParams(window.location.search);
    const index = parseInt(urlParams.get("index"));
  
    const response = await fetch('portfolios.json');
    const portfolios = await response.json();
  
    const detailContent = document.getElementById("detail-content");
    detailContent.innerHTML = marked(portfolios[index].fileContent); // Renderiza o conteúdo do Markdown em HTML
  }
  
  loadDetailContent();  