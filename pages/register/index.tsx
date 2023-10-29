import EmailExistsMsgModal from "@/src/components/EmailExistsMsgModal";
import FormBtn from "@/src/components/FormBtn";
import LoadingModal from "@/src/components/LoadingModal";
import SuccessfulMsgModal from "@/src/components/SuccessfulMsgModal";
import registerService from "@/src/services/registerService";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [validPassword, setValidPassword] = useState(password);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isRedirectedToLogin, setIsRedirectedToLogin] = useState(false);

  const router = useRouter();

  const userObject = {
    username: username,
    email: email,
    password: validPassword,
  };

  const setLoadingToFalse = () => {
    setIsLoading(false);
  };

  const handleRegistration = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (password === passwordConf) {
      setIsLoading(true);
      setTimeout(() => {
        registerService
          .registerUser(userObject)
          .then((response) => {
            if (response.status === false) {
              setIsError(true);
              setErrorMessage(response.message);
            } else {
              setSuccessMessage("Account created!");
              setIsSuccessful(true);
            }
          })
          .catch(() => {
            setIsError(true);
            setErrorMessage("Something went wrong");
          })
          .finally(() => {
            setLoadingToFalse();
          });
      }, 2500);
    } else {
      setShowPasswordError(true);
      return null;
    }
    setShowPasswordError(false);
  };

  const handleGoToLogin = () => {
    router.push("/login");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center relative">
      <section className="p-12 flex flex-col justify-center items-center w-[485px] h-[525px] place-content-center bg-white rounded-[12px] relative z-10">
        <h1 className="absolute top-[20px] text-[55px] font-bold">BOUNTYLNK</h1>
        <form
          onSubmit={handleRegistration}
          action=""
          className="flex flex-col justify-center mt-[60px] items-center"
        >
          <input
            type="text"
            className="bg-[#D7D7D7] text-black text-center h-[40px] w-[325px] rounded-[9px]"
            required
            maxLength={15}
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
            minLength={7}
            maxLength={15}
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
            minLength={7}
            maxLength={15}
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
            maxLength={50}
            name="email"
            placeholder="ENTER EMAIL"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {showPasswordError ? (
            <p className="absolute bottom-[150px] text-[13px] text-red-600">
              Password does not match
            </p>
          ) : null}

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
      {isLoading ? <LoadingModal loadingMessage="Creating account" /> : null}
      {isError ? (
        <EmailExistsMsgModal
          loadingMessage={errorMessage}
          setIsError={setIsError}
        />
      ) : null}
      {isSuccessful ? (
        <SuccessfulMsgModal
          loadingMessage={successMessage}
          setIsSuccessful={setIsSuccessful}
        />
      ) : null}
    </div>
  );
};

export default index;
