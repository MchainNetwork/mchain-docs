const fs = require('fs').promises;
const path = require('path');

async function readDirectoryRecursively(directory) {
  let fileDetails = [];

  async function readDirectory(directory) {
    const items = await fs.readdir(directory, { withFileTypes: true });
    for (const item of items) {
      const fullPath = path.join(directory, item.name);
      if (item.isDirectory()) {
        await readDirectory(fullPath);
      } else if (path.extname(item.name) === '.md') {
        const fileDetail = await readFile(fullPath);
        fileDetails.push(fileDetail);
      }
    }
  }

  async function readFile(filePath) {
    try {
      const data = await fs.readFile(filePath, 'utf8');
      return {
        Filename: path.relative(process.cwd(), filePath),
        Characters: data.length,
      };
    } catch (err) {
      console.error('Error reading file:', err);
      return {
        Filename: path.relative(process.cwd(), filePath),
        Characters: 0,
      };
    }
  }

  await readDirectory(directory);
  return fileDetails;
}

async function main() {
  try {
    const directoryPath = path.join(__dirname, '../docs');
    const fileDetails = await readDirectoryRecursively(directoryPath);

    console.table(fileDetails);

    const totalCharacters = fileDetails.reduce(
      (acc, file) => acc + file.Characters,
      0
    );
    console.log(`Total characters in all Markdown files: ${totalCharacters}`);
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
