import React, { useState } from 'react';

interface Option {
  id: string;
  name: string;
  iconUrl: string;
}

interface CustomSelectProps {
  options: Option[];
  label: string;
  defaultSelect: string;
  onSelectOption: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, label, defaultSelect, onSelectOption }) => {
  const [isOpen, setIsOpen] = useState(false); // State to track dropdown visibility
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
    onSelectOption(option.id);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };

  return (
    <div className="relative">
      <label className="block text-lg font-bold mb-2">{label}</label>
      <button
        type="button"
        className="w-full px-4 py-2 text-white bg-black border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
        onClick={toggleDropdown} // Open/Close dropdown
      >
        <span className="flex items-center">
          {selectedOption ? (
            <>
              <img src={selectedOption.iconUrl} alt={selectedOption.name} className="h-5 w-5 rounded-full" />
              <span className="ml-3 block truncate">{selectedOption.name}</span>
            </>
          ) : (
            <span className="ml-3 block truncate">{defaultSelect}</span>
          )}
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute z-10 max-h-60 w-full overflow-auto rounded-md bg-black  border border-gray-500 py-1 text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {options.map((option) => (
            <li
              key={option.id}
              className="cursor-pointer select-none relative py-2 pl-3 pr-9 text-white hover:bg-gray-900"
              onClick={() => handleOptionSelect(option)}
            >
              <div className="flex items-center">
                <img src={option.iconUrl} alt={option.name} className="h-5 w-5 rounded-full" />
                <span className="ml-3 block truncate">{option.name}</span>
              </div>
              {selectedOption?.id === option.id && (
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
