import React from "react";

const Login = () => {
  return (
    <section className="grow w-full font-poppins flip-horizontal-bottom flex__col-center">
      <form className="container w-full h-full section__padding flex flex-col justify-center items-center">
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <input
            type="email"
            name="email"
            className="bg-blue border-0 outline-0 text-white p-2 placeholder:text-white sm:w-1/2 w-full my-3"
            placeholder="Email"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <input
            type="password"
            name="password"
            className="bg-blue border-0 outline-0 text-white p-2 placeholder:text-white sm:w-1/2 w-full my-3"
            placeholder="Password"
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
