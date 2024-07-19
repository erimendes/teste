//Express [Router, multer]
import { Router } from "express";
import multer from "multer";

//Controller Usado para Aula
import { firstController } from "./app/controller/FirstController";

//Middleware de Upload para o Avatar
import { uploadAvatar } from "./app/middleware/upload/avatar";

//Inicialização do Router
const router: Router = Router();

//Routes
router.post(
  //Rota de acesso
  "/public/uploads",
  /*
    ***ATENÇÃO****
    Esse Middleware que fará com que aconteça o Upload
  */
  multer(uploadAvatar.getConfig).single("avatar"),
  //Controller
  firstController.uploadAvatar
);

/*
  Uso do nosso Middleware
  ( multer ) => passamos todas nossas configs para dentro dele
  ( uploadAvatar.getConfig ) => é a configuração que o multer utiliza
  ( single("avatar") ) => falamos se é um upload único ou múltiplos
  ( "avatar" ) => informamos que o multipart form temos uma referência que se chama "avatar"
  Usando dessa forma deixamos tudo bem organizado
*/
multer(uploadAvatar.getConfig).single("avatar")

export { router };