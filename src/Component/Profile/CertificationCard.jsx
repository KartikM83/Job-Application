// CertificationCard.jsx
import React from "react";

// Import all logos
import Amazon from "../../assets/Icons/Amazon.png";
import Apple from "../../assets/Icons/Apple.png";
import Adobe from "../../assets/Icons/Adobe.png";
import Google from "../../assets/Icons/Google.png";
import Meta from "../../assets/Icons/Meta.png";
import Microsoft from "../../assets/Icons/Microsoft.png";
import Netflix from "../../assets/Icons/Netflix.png";
import Spotify from "../../assets/Icons/Spotify.png";

// Map issuer to icons
const logos = {
  Google,
  Microsoft,
  Amazon,
  Apple,
  Netflix,
  Spotify,
  Adobe,
  Meta,
};

function CertificationCard(props) {
  return (
    <div className="flex justify-between mb-10">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 p-2 bg-mine-shaft-800 rounded-xl">
          <img
            className="w-full h-full object-contain"
            src={logos[props.issuer] || ""}
            alt={props.issuer}
          />
        </div>

        <div className="flex flex-col">
          <div className="font-bold text-lg">{props.name}</div>
          <div className="text-md">
            <div>{props.issuer}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <div className="text-mine-shaft-300 text-md">{props.issueDate}</div>
        <div className="text-mine-shaft-300 text-md">
          ID: {props.certificateId}
        </div>
      </div>
    </div>
  );
}

export default CertificationCard;
