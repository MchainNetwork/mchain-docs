const fs = require('fs');
const path = require('path');

const directoryPath = './docs';
const outputDirectory = './docs-combined';
const maxFiles = 11;

function getAllMDFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllMDFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      if (path.extname(file) === '.md') {
        arrayOfFiles.push(path.join(dirPath, '/', file));
      }
    }
  });

  return arrayOfFiles;
}

function combineFiles(files) {
  const filesPerGroup = Math.ceil(files.length / maxFiles);

  for (let i = 0; i < maxFiles; i++) {
    const filesToCombine = files.slice(
      i * filesPerGroup,
      (i + 1) * filesPerGroup
    );
    let combinedContent = '';

    filesToCombine.forEach((filePath) => {
      const content = fs.readFileSync(filePath, 'utf8');
      combinedContent += content + '\n\n';
    });

    if (combinedContent) {
      fs.writeFileSync(
        `${outputDirectory}/combined_${i + 1}.md`,
        combinedContent
      );
      console.log(`Combined file: combined_${i + 1}.md`);
    }
  }
}

if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory, { recursive: true });
}

const mdFiles = getAllMDFiles(directoryPath);
combineFiles(mdFiles);
