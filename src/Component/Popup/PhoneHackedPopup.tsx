import React, { useState } from "react";
import ServiceCenterPopup from "./ServiceCenterPopUp";

interface PopupProps {
  question: string;
  options: string[];
}

const PhoneHackedPopup: React.FC<PopupProps> = ({ question, options }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  // const handlePopupClose = () => {
  //   setShowPopup(false);
  // };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-md m-2">
        <h2 className="text-xl font-bold mb-4">{question}</h2>
        {options.map((option, index) => (
          <button
            onClick={handlePopupOpen}
            key={index}
            className="px-4 py-2 bg-pink-500 text-white rounded-md shadow mr-2 mb-2 hover:bg-pink-600"
          >
            {option}
          </button>
        ))}
        {showPopup && (
          <ServiceCenterPopup
            question="Please contact customer care for further assistance."
            options={["Call"]}
          />
        )}
      </div>
    </div>
  );
};

export default PhoneHackedPopup;
