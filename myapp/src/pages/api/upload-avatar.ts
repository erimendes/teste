// src/pages/api/upload-avatar.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false, // Desabilita o parse padrão do body
  },
};

const uploadAvatar = (req: NextApiRequest, res: NextApiResponse) => {
  const form = new IncomingForm();
  form.uploadDir = path.join(process.cwd(), "/api/public/uploads");
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(500).json({ message: "Erro ao fazer upload." });
      return;
    }

    const file = files.avatar;
    if (file) {
      res.status(200).json({ message: "Upload bem-sucedido!", file });
    } else {
      res.status(400).json({ message: "Nenhum arquivo enviado." });
    }
  });
};

export default uploadAvatar;
