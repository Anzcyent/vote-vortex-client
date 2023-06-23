import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.email !== "" && data.password !== "")
      dispatch(login(data, navigate));
  };

  return (
    <section className="grow w-full font-poppins flip-horizontal-bottom flex__col-center">
      <form
        onSubmit={handleSubmit}
        className="container w-full h-full section__padding flex flex-col justify-center items-center"
      >
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <input
            type="email"
            name="email"
            className="bg-blue border-0 outline-0 text-white p-2 placeholder:text-white sm:w-1/2 w-full my-3"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <input
            type="password"
            name="password"
            className="bg-blue border-0 outline-0 text-white p-2 placeholder:text-white sm:w-1/2 w-full my-3"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-1/8">
          <button
            type="submit"
            className="bg-red text-sm font-bold text-white px-4 py-1"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
