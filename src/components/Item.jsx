import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { selectItem } from "../redux/actions/survey";

const Item = ({ _id, content, voters, percentage }) => {
  const dispatch = useDispatch();
  const { selected_item, survey } = useSelector((state) => state.surveyReducer);
  const { user } = useSelector((state) => state.authReducer);

  const userVotedToThisSurvey = user.voted_surveys.includes(survey._id);

  return (
    <div className="my-2 w-full flex">
      <div
        className={`border border-blue p-2 sm:w-1/2 w-full ${
          (selected_item === _id || userVotedToThisSurvey) &&
          "bg-blue text-white flex items-center justify-between"
        }`}
      >
        <span>{content}</span>
        {userVotedToThisSurvey && (
          <span className="text-aqua font-bold">
            {Math.round(percentage) + "%"}{" "}
            <small className="text-white">({voters.length + " vote"})</small>{" "}
          </span>
        )}
      </div>

      {!userVotedToThisSurvey && (
        <div
          onClick={() => dispatch(selectItem(_id))}
          className="border border-green w-10 mx-5 cursor-pointer hover:bg-green transition flex__center"
        >
          {selected_item === _id && (
            <AiOutlineCheck className="text-black font-bold text-lg" />
          )}
        </div>
      )}
    </div>
  );
};

export default Item;
