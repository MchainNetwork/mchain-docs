const fs = require('fs');
const path = require('path');

const glossaryFilePath = path.join(__dirname, '../docs/learn/glossary.md');
const i18nPath = path.join(__dirname, '../i18n');

// Function to sort and write the glossary file
function sortAndWriteGlossary(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading the glossary file (${filePath}):`, err);
      return;
    }

    const headerEnd = data.indexOf('##');
    const header = data.substring(0, headerEnd);
    const lines = data.substring(headerEnd).split('\n');

    const terms = [];
    let currentTerm = null;
    for (let line of lines) {
      if (line.startsWith('## ')) {
        if (currentTerm) {
          terms.push(currentTerm);
        }
        currentTerm = { term: line, description: '' };
      } else if (currentTerm) {
        currentTerm.description += line;
      }
    }
    if (currentTerm) {
      terms.push(currentTerm);
    }

    terms.sort((a, b) => a.term.localeCompare(b.term));

    const sortedContent = terms
      .map(
        (t) =>
          t.term.replace(/\n+$/, '') +
          '\n' +
          t.description.replace(/\n+$/, '') +
          '\n'
      )
      .join('\n');

    fs.writeFile(filePath, header + sortedContent, (err) => {
      if (err) {
        console.error(`Error writing to the glossary file (${filePath}):`, err);
      } else {
        console.log(`Glossary sorted successfully at ${filePath}!`);
      }
    });
  });
}

// Sort the main glossary file
sortAndWriteGlossary(glossaryFilePath);

// Read language folders and sort each glossary
fs.readdir(i18nPath, { withFileTypes: true }, (err, folders) => {
  if (err) {
    console.error('Error reading i18n directory:', err);
    return;
  }

  folders.forEach((folder) => {
    if (folder.isDirectory()) {
      const langGlossaryPath = path.join(
        i18nPath,
        folder.name,
        'docusaurus-plugin-content-docs',
        'current',
        'learn',
        'glossary.md'
      );

      if (fs.existsSync(langGlossaryPath)) {
        sortAndWriteGlossary(langGlossaryPath);
      }
    }
  });
});
