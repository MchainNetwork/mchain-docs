const fs = require('fs');
const path = require('path');

const glossaryFilePath = path.join(__dirname, './docs/glossary.md');

fs.readFile(glossaryFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the glossary file:', err);
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

  fs.writeFile(glossaryFilePath, header + sortedContent, (err) => {
    if (err) {
      console.error('Error writing to the glossary file:', err);
    } else {
      console.log('Glossary sorted successfully!');
    }
  });
});
