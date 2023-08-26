const fs = require("fs").promises;
const { Octokit } = require("octokit");

async function generateJSON() {
  try {
    const octokit = new Octokit({ auth: process.env.GIT_TOKEN });

    // Use a API do GitHub para obter as informações do arquivo portfolios.json
    const response = await octokit.request('GET /repos/:owner/:repo/contents/:path', {
      owner: 'cocacolacomvodka',
      repo: 'Git-portfolio-markdown',
      path: 'portfolios.json'
    });

    const existingShaOfPortfoliosJson = response.data.sha; // Obtenha o SHA do último commit

    // ... o restante do seu código para gerar o arquivo JSON

    await octokit.request('PUT /repos/:owner/:repo/contents/:path', {
      owner: 'cocacolacomvodka',
      repo: 'Git-portfolio-markdown',
      path: 'portfolios.json',
      message: 'Update portfolios.json',
      content: Buffer.from(JSON.stringify(portfolios, null, 2)).toString('base64'),
      sha: existingShaOfPortfoliosJson // Use o SHA obtido
    });

    console.log("JSON file updated successfully!");
  } catch (error) {
    console.error("Error generating JSON:", error);
  }
}

generateJSON();
