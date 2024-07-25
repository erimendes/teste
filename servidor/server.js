// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// // Caminho para a pasta com as imagens
// const imagesFolder = "./images";

// // Função para ler todas as imagens como buffers
// function readImagesAsBuffers(files, callback) {
//   const buffers = [];
//   let index = 0;

//   function readNext() {
//     if (index < files.length) {
//       const filePath = path.join(imagesFolder, files[index]);
//       fs.readFile(filePath, (err, data) => {
//         if (err) {
//           callback(err);
//           return;
//         }
//         console.log(`Lendo imagem: ${filePath}`);
//         buffers.push(data);
//         index++;
//         readNext();
//       });
//     } else {
//       callback(null, buffers);
//     }
//   }

//   readNext();
// }

// // Cria o servidor HTTP
// const server = http.createServer((req, res) => {
//   fs.readdir(imagesFolder, (err, files) => {
//     if (err) {
//       console.error("Erro ao ler a pasta de imagens:", err);
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end("Erro ao ler a pasta de imagens");
//       return;
//     }

//     console.log("Arquivos na pasta:", files);

//     // Filtra apenas arquivos de imagem
//     const imageFiles = files.filter((file) =>
//       /\.(jpg|jpeg|png|gif)$/.test(file)
//     );
//     console.log("Arquivos de imagem:", imageFiles);

//     if (imageFiles.length === 0) {
//       console.log("Nenhuma imagem encontrada");
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       res.end("Nenhuma imagem encontrada");
//       return;
//     }

//     readImagesAsBuffers(imageFiles, (err, buffers) => {
//       if (err) {
//         console.error("Erro ao ler as imagens:", err);
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.end("Erro ao ler as imagens");
//         return;
//       }

//       res.writeHead(200, { "Content-Type": "application/octet-stream" });
//       console.log("Enviando imagens...");

//       buffers.forEach((buffer, index) => {
//         console.log(`Enviando imagem ${index + 1} de ${buffers.length}`);
//         res.write(buffer);
//       });

//       res.end();
//     });
//   });
// });

// // Inicia o servidor na porta 3000
// server.listen(4000, () => {
//   console.log("Servidor rodando em http://localhost:4000");
// });

const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors"); // Importar o cors

const app = express();
const imagesFolder = path.join(__dirname, "images");

app.use(cors()); // Usar o middleware cors

app.get("/images", (req, res) => {
  fs.readdir(imagesFolder, (err, files) => {
    if (err) {
      res.status(500).send("Error reading image directory");
      return;
    }

    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png|gif)$/.test(file)
    );

    res.json(imageFiles);
  });
});

app.get("/images/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(imagesFolder, imageName);

  if (fs.existsSync(imagePath)) {
    res.sendFile(imagePath);
  } else {
    res.status(404).send("Image not found");
  }
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
