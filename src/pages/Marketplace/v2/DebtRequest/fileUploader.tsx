// import './FileUploader.css';
// import React, { useState } from 'react';

// const FileUploader: React.FC = () => {
//   const [file, setFile] = useState<File | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const selected = e.target.files?.[0];
//     if (selected) {
//       setFile(selected);
//     }
//   };

//   const handleUpload = async () => {
//     if (!file) return;

//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const res = await fetch('http://localhost:5000/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await res.json();
//       console.log('Upload success:', data);
//     } catch (err) {
//       console.error('Upload failed:', err);
//     }
//   };

//   return (
//     <div className="uploader-container">
//       <h2>Upload a File</h2>
//       <input type="file" onChange={handleChange} />
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// };

// export default FileUploader;
