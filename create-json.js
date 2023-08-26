const fs = require("fs").promises;

const { Octokit } = require("octokit");

async function generateJSON() {
    try {
    const portfolioFiles = await fs.readdir("portfolios");

    const portfolios = await Promise.all(portfolioFiles.map(async (filename) => {
      const fileContent = await fs.readFile(`portfolios/${filename}`, "utf-8");
      const [title, description] = fileContent.split("\n");

      return { title, description, fileContent };
    }));

    await fs.writeFile("portfolios.json", JSON.stringify(portfolios, null, 2));
    console.log("JSON file created successfully!");
  } catch (error) {
    console.error("Error generating JSON:", error);
  }

  // Usar o Octokit para criar/atualizar o arquivo no repositório
  const octokit = new Octokit({ auth: process.env.GIT_TOKEN });

  await octokit.request('PUT /repos/:owner/:repo/contents/:path', {
    owner: 'cocacolacomvodka',
    repo: 'Git-portfolio-markdown',
    path: 'portfolios.json',
    message: 'Update portfolios.json',
    content: Buffer.from(JSON.stringify(portfolios, null, 2)).toString('base64'),
    sha: existingShaOfPortfoliosJson // Obtenha o SHA atual do arquivo para atualização
  });
}

generateJSON();

