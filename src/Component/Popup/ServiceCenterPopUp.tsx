import React from "react";

interface PopupProps {
  question: string;
  options: string[];
}

const ServiceCenterPopup: React.FC<PopupProps> = ({ question, options }) => {
  const handleButtonClick = () => {
    window.location.href = `tel:8762380810`;
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-md m-2">
        <h2 className="text-xl font-bold mb-4">{question}</h2>
        {options.map((option, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-pink-500 text-white rounded-md shadow mr-2 mb-2 hover:bg-pink-600"
            onClick={handleButtonClick}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServiceCenterPopup;
