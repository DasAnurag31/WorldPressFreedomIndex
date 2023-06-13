import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";
import { EmailIcon, FacebookIcon, TwitterIcon } from "react-share";

const Share = ({ setdisplay }) => {
  return (
    <div
      className="absolute z-999 flex flex-col md:flex-row gap-1 p-1 -mt-6 bg-slate-100 rounded-md"
      onMouseLeave={() => {
        setdisplay(false);
      }}
    >
      <EmailShareButton url={`https://world-press-freedom-index.vercel.app/`}>
        <EmailIcon size={20} round={true} />
      </EmailShareButton>

      <FacebookShareButton
        url={`https://world-press-freedom-index.vercel.app/`}
      >
        <FacebookIcon size={20} round={true} />
      </FacebookShareButton>

      <TwitterShareButton url={`https://world-press-freedom-index.vercel.app/`}>
        <TwitterIcon size={20} round={true} />
      </TwitterShareButton>
    </div>
  );
};

export default Share;
