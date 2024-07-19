// // components/UploadForm.tsx
// import React, { useState } from 'react';

// const UploadForm: React.FC = () => {
//   const [file, setFile] = useState<File | null>(null);
//   const [message, setMessage] = useState<string | null>(null);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setFile(e.target.files[0]);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!file) {
//       setMessage('Selecione um arquivo para enviar.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('avatar', file);

//     try {
//       const res = await fetch('/api/upload-avatar', {
//         method: 'POST',
//         body: formData,
//       });
//       const data = await res.json();
//       if (res.ok) {
//         setMessage('Upload bem-sucedido!');
//       } else {
//         setMessage(data.message);
//       }
//     } catch (error) {
//       setMessage('Erro ao fazer upload.');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleFileChange} />
//         <button type="submit">Enviar</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default UploadForm;
