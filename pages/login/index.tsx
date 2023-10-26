import FormBtn from "@/src/components/FormBtn";
import { useRouter } from "next/router";
import React, { useState } from "react";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleGoToForgotPassword = () => {
    router.push("/forgot-password");
  };

  const handleGoToRegistration = () => {
    router.push("/register");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <section className="p-12 flex flex-col justify-center items-center w-[485px] h-[485px] place-content-center bg-white rounded-[12px] relative">
        <h1 className="absolute top-[20px] text-[55px] font-bold">BOUNTYLNK</h1>
        <form
          action=""
          className="flex flex-col justify-center mt-[60px] items-center"
        >
          <input
            type="text"
            className="bg-[#D7D7D7] text-black text-center h-[40px] w-[325px] rounded-[9px]"
            required
            name="email"
            placeholder="ENTER EMAIL"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            className="bg-[#D7D7D7] text-black text-center h-[40px] w-[325px] mt-[40px] rounded-[9px]"
            required
            name="password"
            placeholder="ENTER PASSWORD"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />{" "}
          <button className="mt-[40px]">
            <FormBtn buttonTitle={"LOG IN"} />
          </button>
        </form>

        <nav className="text-center mt-[15px] text-[12px]">
          <a
            className="cursor-pointer underline"
            onClick={handleGoToForgotPassword}
          >
            Forgot password?
          </a>
          <p>or</p>
          <a
            className="cursor-pointer underline"
            onClick={handleGoToRegistration}
          >
            Create an account?
          </a>
        </nav>
      </section>
    </div>
  );
};

export default index;
