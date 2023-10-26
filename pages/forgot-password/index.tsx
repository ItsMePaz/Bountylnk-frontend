import FormBtn from "@/src/components/FormBtn";
import { useRouter } from "next/router";
import React, { useState } from "react";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleBackToLogin = () => {
    router.push("/login");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <section className="flex flex-col justify-center items-center w-[485px] h-[300px] place-content-center bg-white rounded-[12px] relative">
        <h1 className="text-[15px] font-bold">FORGOT PASSWORD</h1>
        <form
          action=""
          className="flex flex-col justify-center items-center mt-[30px]"
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
          />{" "}
          <button className="mt-[25px]">
            <FormBtn buttonTitle={"SEND"} />
          </button>
        </form>

        <nav className="text-center mt-[15px] text-[12px]">
          <a className="cursor-pointer underline" onClick={handleBackToLogin}>
            Back to login
          </a>
        </nav>
      </section>
    </div>
  );
};

export default index;
