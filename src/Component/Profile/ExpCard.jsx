import { IconHeart } from "@tabler/icons-react";
import React, { useState } from "react";
import ExpInput from "./ExpInput";

// Import all logos
import Amazon from "../../assets/Icons/Amazon.png";
import Apple from "../../assets/Icons/Apple.png";
import Adobe from "../../assets/Icons/Adobe.png";
import Google from "../../assets/Icons/Google.png";
import Meta from "../../assets/Icons/Meta.png";
import Microsoft from "../../assets/Icons/Microsoft.png";
import Netflix from "../../assets/Icons/Netflix.png";
import Spotify from "../../assets/Icons/Spotify.png";

// Map company to logo
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

function ExpCard(props) {
  const [edit, setEdit] = useState(false);

  return !edit ? (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between ">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 p-2 bg-mine-shaft-800 rounded-xl">
            <img
              className="w-full h-full object-contain"
              src={logos[props.company] || ""}
              alt={props.company}
            />
          </div>

          <div className="flex flex-col">
            <div className="font-bold text-lg">{props.title}</div>
            <div className="text-sm">
              <div>
                {props.company} &#x2022; {props.location}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-mine-shaft-300 text-md">
            {props.startDate} - {props.endDate}
          </div>
        </div>
      </div>

      <div className="text-mine-shaft-300 text-justify text-sm">
        <div>{props.description}</div>
      </div>

      {props.edit && (
        <div className="cursor-pointer flex items-center gap-2">
          <button
            onClick={() => setEdit(true)}
            className="w-fit box-border border-2 border-bright-sun-400 text-bright-sun-400 font-semibold flex justify-center py-1.5 px-5 rounded-md"
            type="submit"
          >
            Edit
          </button>

          <button
            className="w-fit box-border text-red-500 bg-[rgba(255,100,0,0.1)] font-semibold flex justify-center py-2 px-5 rounded-md"
            type="submit"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  ) : (
    <ExpInput setEdit={setEdit} />
  );
}

export default ExpCard;
