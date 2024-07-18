const fs = require('fs');
const path = require('path');

// Caminho correto para o diretório do projeto (use o caminho absoluto diretamente)
const directoryPath = 'C:/dev/teste/backend'; // Atualize 'C:/dev/teste/backend/backend' com o caminho correto
const outputFilePath = path.join(__dirname, 'output.txt');

console.log('Procurando no diretório:', directoryPath);

function readDirectory(directory) {
    let fileContent = '';

    const files = fs.readdirSync(directory);
    console.log('Arquivos encontrados:', files);

    files.forEach((file) => {
        const filePath = path.join(directory, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            fileContent += readDirectory(filePath);
        } else {
            fileContent += `\n\n--- ${filePath} ---\n\n`;
            fileContent += fs.readFileSync(filePath, 'utf8');
        }
    });

    return fileContent;
}

try {
    const projectCode = readDirectory(directoryPath);

    fs.writeFileSync(outputFilePath, projectCode, 'utf8');

    console.log('Código do projeto foi escrito para', outputFilePath);
} catch (error) {
    console.error('Erro ao ler o diretório:', error);
}
