import React, { useState } from "react";
import { register } from "../redux/actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = data;

    if (password === confirmPassword) dispatch(register(data, navigate));

    return;
  };

  return (
    <section className="grow w-full font-poppins flip-horizontal-bottom flex__col-center">
      <form
        onSubmit={handleSubmit}
        className="container w-full h-full section__padding flex flex-col justify-center items-center"
      >
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <input
            type="text"
            name="username"
            className="bg-blue border-0 outline-0 text-white p-2 placeholder:text-white sm:w-1/2 w-full my-3"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <input
            type="email"
            name="email"
            className="bg-blue border-0 outline-0 text-white p-2 placeholder:text-white sm:w-1/2 w-full my-3"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <input
            type="password"
            name="password"
            className="bg-blue border-0 outline-0 text-white p-2 placeholder:text-white sm:w-1/2 w-full my-3"
            placeholder="Password"
            onChange={handleChange}
          />

          <small className="text-xs mb-3 text-aqua font-semibold">
            (Should be min 6 characters.)
          </small>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <input
            type="password"
            name="confirmPassword"
            className="bg-blue border-0 outline-0 text-white p-2 placeholder:text-white sm:w-1/2 w-full my-3"
            placeholder="Confirm Password"
            onChange={handleChange}
          />

          {data.password !== "" && data.password !== data.confirmPassword && (
            <small className="text-xs mb-3 text-red font-semibold">
              Passwords don't match each other!
            </small>
          )}
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

export default Register;
