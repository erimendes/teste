import multer from "multer"; 
import path from "path"; 
import fs from "fs";
import mime from "mime-types";
import { Request } from "express";
import { FileFilterCallback } from "multer";

class UploadAvatar {
  // Pasta para onde será feito o Upload
  private URL: string = path.join(__dirname, 'upload'); 

  constructor() {}

  // Método onde armazenaremos nossos arquivos
  private storage(): multer.StorageEngine {
    return multer.diskStorage({
      // Criar o destino do arquivo
      destination: (req, file, cb) => {
        // Verifica se não existe o diretório
        if (!fs.existsSync(this.URL)) {
          // Efetua a criação do diretório caso ele não exista
          fs.mkdirSync(this.URL);
        }
        // Define o caminho da pasta
        cb(null, this.URL);
      },
      // Renomeia o arquivo
      filename: (req, file, cb) => {
        // Aqui vamos usar o mime-type para chegar o tipo do arquivo
        // E predefinir como ele veio até nosso sistema
        const type = mime.extension(file.mimetype);

        // Renomeia o nome do arquivo
        // Aqui temos o nome do arquivo gerado pelo Date
        // E colocamos a extensão dele de acordo com o mime-type
        cb(null, `${new Date().getTime()}.${type}`);
      },
    });
  }

  // Método onde iremos efetuar o filtro de arquivos
  // Se é válido ou não
  private fileFilter() {
    return (
      req: Request,
      file: Express.Multer.File,
      cb: FileFilterCallback
    ) => {
      // Utilizaremos a Lib mime-types para identificar o tipo do arquivo
      const type = mime.extension(file.mimetype);

      // Este array será montado as condições de validação
      // No caso aceitará apenas imagens como "png", "jpg", "jpeg"
      const conditions = ["png", "jpg", "jpeg"];

      // Perguntamos se existe algum desses valores no type
      if (conditions.includes(`${type}`)) {
        // Caso exista, teremos nossa imagem linda maravilhosa
        cb(null, true);
      } else {
        // Caso não dê certo a validação, não efetuaremos o upload
        cb(null, false);
      }
    };
  }

  // Configuração que usaremos em nossas rotas como Middleware
  get getConfig(): multer.Options {
    return {
      // Storage serve para compor a config do multer destination e filename
      storage: this.storage(),
      // FileFilter serve para validar o filtro de arquivos
      fileFilter: this.fileFilter(),
    };
  }
}

export const uploadAvatar = new UploadAvatar();
