import FormBtn from "@/src/components/FormBtn";
import { useRouter } from "next/router";
import React, { useState } from "react";

const index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  const handleGoToLogin = () => {
    router.push("/login");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <section className="p-12 flex flex-col justify-center items-center w-[485px] h-[525px] place-content-center bg-white rounded-[12px] relative">
        <h1 className="absolute top-[20px] text-[55px] font-bold">BOUNTYLNK</h1>
        <form
          action=""
          className="flex flex-col justify-center mt-[60px] items-center"
        >
          <input
            type="text"
            className="bg-[#D7D7D7] text-black text-center h-[40px] w-[325px] rounded-[9px]"
            required
            name="username"
            placeholder="ENTER USERNAME"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="password"
            className="bg-[#D7D7D7] text-black text-center h-[40px] w-[325px] mt-[20px] rounded-[9px]"
            required
            name="password"
            placeholder="ENTER PASSWORD"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="password"
            className="bg-[#D7D7D7] text-black text-center h-[40px] w-[325px] mt-[20px] rounded-[9px]"
            required
            name="passwordConf"
            placeholder="RE-ENTER PASSWORD"
            value={passwordConf}
            onChange={(e) => {
              setPasswordConf(e.target.value);
            }}
          />
          <input
            type="text"
            className="bg-[#D7D7D7] text-black text-center h-[40px] w-[325px] mt-[20px] rounded-[9px]"
            required
            name="email"
            placeholder="ENTER EMAIL"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button className="mt-[40px]">
            <FormBtn buttonTitle={"SIGN UP"} />
          </button>
        </form>

        <nav className="text-center mt-[15px] text-[12px]">
          <a className="cursor-pointer underline" onClick={handleGoToLogin}>
            Already have an account?
          </a>
        </nav>
      </section>
    </div>
  );
};

export default index;
