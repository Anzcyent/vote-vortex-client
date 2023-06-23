import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getOneSurvey } from "../redux/actions/survey";
import { useNavigate, useParams } from "react-router-dom";
import { editSurvey } from "../redux/actions/survey";

const EditSurvey = () => {
  const { survey } = useSelector((state) => state.surveyReducer);
  const { isLoaded } = useSelector((state) => state.appReducer);
  const { access_token } = useSelector((state) => state.authReducer);

  const [items, setItems] = useState([]);
  const [data, setData] = useState({
    title: survey.title,
    description: survey.description,
    items: survey.items,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneSurvey(id));
  }, []);

  useEffect(() => {
    if (survey.items && survey.items.length > 0) {
      const initialItems = survey.items.map((item) => item.content || "");
      setItems(initialItems);
    }
  }, [survey.items]);

  const handleItemChange = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index] = value;
    setItems(updatedItems);
  };

  const handleItemRemove = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const addItem = () => {
    if (items.length < 4) {
      setItems([...items, ""]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.title.length <= 50 && data.description.length <= 255)
      dispatch(
        editSurvey(survey._id, { ...data, items }, access_token, navigate)
      );
  };

  if (!isLoaded) {
    return (
      <section className="grow font-poppins scale-up-center w-full flex__col-center">
        <h3 className="font-bold text-green sm:text-2xl text-lg">Loading...</h3>
      </section>
    );
  }

  if (!survey._id) {
    return (
      <section className="grow font-poppins scale-up-center w-full flex__col-center">
        <h3 className="font-bold text-red sm:text-2xl text-lg">
          404 Survey Not Found
        </h3>
      </section>
    );
  }

  return (
    <section className={`grow w-full font-poppins flip-horizontal-bottom ${!isLoaded && "cursor-pointer"}`}>
      <form
        onSubmit={handleSubmit}
        className="container w-full section__padding flex flex-col"
      >
        <div className="w-full flex flex-col">
          <input
            type="text"
            name="title"
            className="bg-blue border-0 outline-0 text-white p-2 placeholder:text-white sm:w-1/2 w-full my-3"
            placeholder="Title"
            required
            onChange={handleChange}
            defaultValue={survey.title}
          />
          <small className="text-xs mb-3 text-aqua font-semibold">
            (Should be max 50 characters.)
          </small>
        </div>

        <div className="w-full flex flex-col">
          <input
            type="text"
            name="description"
            className="bg-blue border-0 outline-0 text-white p-2 placeholder:text-white sm:w-1/2 w-full my-3"
            placeholder="Description"
            required
            onChange={handleChange}
            defaultValue={survey.description}
          />
          <small className="text-xs mb-3 text-aqua font-semibold">
            (Should be max 255 characters.)
          </small>
        </div>

        <div
          className="w-full flex flex-col justify-start items-start my-5"
          id="itemsContainer"
        >
          <span>Items</span>
          {items.map((item, index) => (
            <div
              className="flex items-center w-full sm:bg-white bg-blue my-3"
              key={index}
            >
              <input
                type="text"
                name="item"
                className=" border-0 outline-0 text-white bg-blue p-2 placeholder:text-white sm:w-1/2 w-full"
                placeholder={item ? item : `Item ${index + 1}`}
                value={item}
                onChange={(e) => handleItemChange(index, e.target.value)}
                key={index}
                required
              />

              {index >= 2 && (
                <AiOutlineClose
                  className="sm:ml-5 mr-5 font-bold text-xl cursor-pointer hover:opacity-40 active:scale-105 text-white sm:text-black"
                  onClick={() => handleItemRemove(index)}
                />
              )}
            </div>
          ))}
          <small className="text-xs mb-3 text-aqua font-semibold">
            (You can add minimum 2 and maximum 4 items.)
          </small>
          {items.length < 4 && (
            <button
              type="button"
              className="my-4 bg-aqua text-white px-4 py-1 flex__center hover:opacity-80 active:scale-105"
              onClick={addItem}
            >
              Add Item
            </button>
          )}
        </div>

        <div className="w-full">
          <button
            type="submit"
            className="flex__center bg-red text-sm font-bold text-white px-4 py-1 hover:opacity-80 active:scale-105"
          >
            Edit
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditSurvey;
