const fs = require("fs").promises;

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
}

generateJSON();
