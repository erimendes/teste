// // pages/api/upload-avatar.ts
// import type { NextApiRequest, NextApiResponse } from 'next';
// import formidable from 'formidable';
// import fs from 'fs';
// import path from 'path';

// // Desativa o parser padrão do Next.js para processar o upload com formidable
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// // Cria a pasta de uploads se não existir
// const ensureUploadDirExists = () => {
//   const uploadDir = path.join(process.cwd(), '/public/uploads');
//   if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir, { recursive: true });
//   }
// };

// const uploadAvatar = (req: NextApiRequest, res: NextApiResponse) => {
//   const form = new formidable.IncomingForm();
//   ensureUploadDirExists();
//   form.uploadDir = path.join(process.cwd(), '/public/uploads'); // Define a pasta para uploads
//   form.keepExtensions = true;

//   form.parse(req, (err, fields, files) => {
//     if (err) {
//       console.error('Erro ao fazer upload:', err);
//       return res.status(500).json({ message: 'Erro ao fazer upload.' });
//     }

//     const file = files.avatar as formidable.File;
//     if (file && file.filepath) {
//       res.status(200).json({ message: 'Upload bem-sucedido!', file });
//     } else {
//       res.status(400).json({ message: 'Nenhum arquivo enviado ou tipo de arquivo inválido.' });
//     }
//   });
// };

// export default uploadAvatar;
