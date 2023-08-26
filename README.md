# Git Portfolio Markdown

Este é um projeto que permite que os alunos de uma oficina de Git e GitHub contribuam com seus portfólios em arquivos Markdown. Os portfólios são exibidos em um site como um grid de cards.

## Funcionalidades

- Os alunos podem clonar o repositório e adicionar seus próprios arquivos Markdown contendo seus portfólios.
- Um site é gerado automaticamente, exibindo os portfólios em um grid de cards.
- Os arquivos Markdown são lidos e processados para exibir títulos e descrições nos cards.
- Os cards são clicáveis, redirecionando para páginas de detalhes que exibem o conteúdo completo do arquivo Markdown.

## Como Usar

1. Clone este repositório:

```bash
git clone https://github.com/seunomeusuario/Git-portfolio-markdown.git
```

2. Adicione seus arquivos Markdown na pasta `portfolios`.

3. Execute o script `create-json.js` para gerar o JSON com as informações dos portfólios e atualizar o arquivo `portfolios.json` no repositório:

```bash
node create-json.js
```

4. Abra o arquivo `index.html` no seu navegador para visualizar os portfólios em formato de grid de cards.

## Personalização

Você pode personalizar este projeto de acordo com suas necessidades. Algumas áreas que você pode considerar incluem:

- Estilo do site: O arquivo `styles.css` contém o estilo do site. Você pode ajustar cores, fontes e layout para atender às suas preferências.
- Estrutura dos portfólios: O script `create-json.js` lê os arquivos Markdown na pasta `portfolios` e gera um JSON. Você pode ajustar a estrutura dos portfólios de acordo com as informações que deseja exibir.
- Responsividade: O site usa CSS para ser responsivo, mas você pode ajustar as regras de mídia para se adequar a diferentes tamanhos de tela.
- Fluxo de trabalho do GitHub Actions: O projeto usa o GitHub Actions para automatizar a geração e atualização do JSON. Você pode ajustar o fluxo de trabalho conforme necessário.
