import React from "react";
import { companies } from "../Data/Data";
import Marquee from "react-fast-marquee";

// Import all company images
import Amazon from "../../assets/Companies/Amazon.png";
import Figma from "../../assets/Companies/Figma.png";
import Google from "../../assets/Companies/Google.png";
import Meta from "../../assets/Companies/Meta.png";
import Microsoft from "../../assets/Companies/Microsoft.png";
import Netflix from "../../assets/Companies/Netflix.png";
import Oracle from "../../assets/Companies/Oracle.png";
import Pinterest from "../../assets/Companies/Pinterest.png";
import Pngwing from "../../assets/Companies/pngwing.com.png";
import Slack from "../../assets/Companies/Slack.png";
import Spotify from "../../assets/Companies/Spotify.png";
import Walmart from "../../assets/Companies/Walmart.png";

// Map company names to images
const companyImages = {
  Amazon,
  Figma,
  Google,
  Meta,
  Microsoft,
  Netflix,
  Oracle,
  Pinterest,
  "pngwing.com": Pngwing,
  Slack,
  Spotify,
  Walmart,
};

function Companies() {
  return (
    <div className="mt-20 pb-5">
      <div className="text-mine-shaft-100 text-4xl font-semibold text-center mb-10">
        Trusted By <span className="text-bright-sun-400">1000+</span> Companies
      </div>

      <Marquee pauseOnHover={true}>
        {companies.map((company, index) => (
          <div
            key={index}
            className="mx-8 px-3 py-2 hover:bg-mine-shaft-900 rounded-2xl"
          >
            <img
              className="h-16"
              src={companyImages[company]}
              alt={company}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Companies;
