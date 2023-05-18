import React, { useState } from "react";
import PhoneHackedPopup from "../Component/Popup/PhoneHackedPopup";
// import giphy from "../assets/giphy.gif";

const RomanticPage: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  // const handlePopupClose = () => {
  //   setShowPopup(false);
  // };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: `url(https://media4.giphy.com/media/YijAcFNRXRFCOcWwA1/giphy.gif?cid=ecf05e47m81ky5u5xda3cw1acmvq7y90kpkhqiwdoq9a2m7h&ep=v1_gifs_search&rid=giphy.gif&ct=g)`,
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-4xl font-bold mb-8 text-center">
        Click below to see the magic 😉
      </h1>
      <button
        className="px-4 py-2 bg-pink-500 text-white rounded-md shadow hover:bg-pink-600"
        onClick={handlePopupOpen}
      >
        Click me
      </button>
      {showPopup && (
        <PhoneHackedPopup
          question="Hahaha, You fell  for the tap 😂😂 Your phone has been hacked"
          options={["Oh My god"]}
        />
      )}
    </div>
  );
};

export default RomanticPage;
