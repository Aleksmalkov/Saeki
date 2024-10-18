import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FileUploadPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    setFile(selectedFile ? selectedFile : null);
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/file/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('File upload failed');
      }

      const result = await response.json();
      console.log('File uploaded successfully:', result);
      
      // Store the uploaded file path or info in localStorage (optional)
      localStorage.setItem('uploadedFile', result.filePath);

      // Redirect to the next page after a successful upload
      navigate('/configure');
    } catch (err) {
      setError('File upload failed. Please try again.');
      console.error('Error during file upload:', err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white px-4" style={{ height: 'calc(100vh - 57px)' }}>
      <div className="bg-gray-800 shadow-lg p-8 rounded-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Upload Your 3D File</h1>
        <p className="text-gray-400 mb-4 text-center">
          Please upload a .STEP or .IGES file for your 3D printing project.
        </p>
        
        <label className="block mb-4">
          <input 
            type="file" 
            accept=".step,.iges" 
            onChange={handleFileChange} 
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold"
          />
        </label>
        
        <button 
          onClick={handleUpload} 
          className={`w-full py-3 mt-4 rounded-full font-semibold ${file && !uploading ? 'border-saeki-yellow text-saeki-yellow' : 'bg-gray-500 text-gray-400 cursor-not-allowed'}`} 
          disabled={!file || uploading}
        >
          {uploading ? 'Uploading...' : (file ? 'Upload and Proceed' : 'Please Select a File')}
        </button>
        
        {file && (
          <div className="mt-4 text-center text-gray-300">
            Selected file: <span className="font-semibold">{file.name}</span>
          </div>
        )}

        {error && (
          <div className="mt-4 text-center text-red-500">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploadPage;
