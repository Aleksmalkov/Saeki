import React from 'react';

interface FileViewerProps {
  fileUrl: string;
}

const FileViewer: React.FC<FileViewerProps> = ({ fileUrl }) => {
  return (
    <div className="bg-gray-900 p-4 h-full relative text-white border-4 border-dotted border-gray-500">
      <h3 className="text-xl font-bold mb-4 absolute">3D File Viewer</h3>
      {/* Replace this div with actual 3D viewer component if needed */}
      {fileUrl ? (
        <div className="w-full h-full bg-black">
          <p className="text-center">Displaying: {fileUrl}</p>
        </div>
      ) : (
        <div className="w-full h-full bg-black flex items-center justify-center">
          <p className="text-center">No file selected</p>
        </div>
      )}
    </div>
  );
};

export default FileViewer;
