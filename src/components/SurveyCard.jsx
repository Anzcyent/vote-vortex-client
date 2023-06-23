import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SurveyCard = ({ _id, title, description, username }) => {
  const [toggleJoin, setToggleJoin] = useState(false);
  const navigate = useNavigate();

  return (
    <article
      onMouseEnter={() => setToggleJoin(true)}
      onMouseLeave={() => setToggleJoin(false)}
      onClick={() => navigate(`/survey/${_id}`)}
      className="w-[250px] h-[350px] flex flex-col m-4 cursor-pointer hover:opacity-80 hover:scale-105 transition active:scale-95 rounded-lg shadow-xl"
    >
      <h3 className="flex__center font-bold background__gradient text-white">
        {title}
      </h3>
      <div
        className="grow p-3 text-base flex flex-col justify-between"
        style={{ background: "#f7f7f7" }}
      >
        <p className="sm:text-base text-sm">{description}</p>
        <span className="text-sm text-blue">@{username}</span>
      </div>
      {toggleJoin && (
        <button className="flex__center bg-green text-white font-bold h-[13%]">
          Join
        </button>
      )}
    </article>
  );
};

export default SurveyCard;
