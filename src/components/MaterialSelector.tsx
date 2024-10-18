import React, { useState } from 'react';

const materials = [
  {
    name: 'ABS',
    properties: 'Durable, impact-resistant, and heat-resistant. Suitable for automotive parts, toys, and electronics.',
    application: 'ABS is often used in injection molding, 3D printing, and prototyping for sturdy and heat-resistant parts.'
  },
  {
    name: 'Polypropylene',
    properties: 'Chemical-resistant, flexible, and fatigue-resistant. Lightweight but strong.',
    application: 'Commonly used for packaging, containers, and automotive components, as well as medical applications.'
  },
  {
    name: 'PLA',
    properties: 'Biodegradable, easy to print, low shrinkage, and good surface finish.',
    application: 'Widely used in 3D printing for prototypes, toys, and educational models due to its eco-friendliness.'
  },
];

interface MaterialSelectorProps {
  onSelectMaterial: (material: string) => void;
}

const MaterialSelector: React.FC<MaterialSelectorProps> = ({ onSelectMaterial }) => {
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);

  const handleMaterialChange = (materialName: string) => {
    setSelectedMaterial(materialName);
    onSelectMaterial(materialName);
  };

  const selectedMaterialInfo = materials.find(material => material.name === selectedMaterial);

  return (
    <div>
      <label className="block mb-2 text-lg font-medium text-gray-100">Select Material:</label>
      <select
        className="w-full px-4 py-2 mb-6 text-white bg-black border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
        onChange={(e) => handleMaterialChange(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>Select material</option>
        {materials.map((material) => (
          <option key={material.name} value={material.name}>
            {material.name}
          </option>
        ))}
      </select>

      {selectedMaterialInfo && (
        <div className="mt-4 p-4 bg-gray-800 rounded-lg text-white">
          <h3 className="text-xl font-semibold mb-2">{selectedMaterialInfo.name}</h3>
          <p><strong className='text-saeki-yellow'>Properties:</strong> {selectedMaterialInfo.properties}</p>
          <p><strong className='text-saeki-yellow'>Applications:</strong> {selectedMaterialInfo.application}</p>
        </div>
      )}
    </div>
  );
};

export default MaterialSelector;

