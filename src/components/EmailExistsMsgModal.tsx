import React from "react";
import { ClipLoader } from "react-spinners";
import error from "../../public/images/error.png";
import FormBtn from "./FormBtn";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

type Props = {
  loadingMessage: string;
  setIsError: (open: boolean) => void;
};

const EmailExistsMsgModal = ({ loadingMessage, setIsError }: Props) => {
  const router = useRouter();

  const handleGoToLogin = () => {
    router.push("/login");
  };

  const handleErrorModalShow = () => {
    setIsError(false);
  };

  return (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      className="absolute h-screen z-10"
    >
      <section className="flex h-screen  w-screen items-center justify-center relative z-30">
        <motion.div
          className="p-12 flex flex-col justify-center items-center w-29 h-44 place-content-center bg-white rounded-[12px] z-40"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              damping: 3,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <img
            style={{ height: "64px", width: "64px" }}
            src={error.src}
            alt=""
          />

          <br />
          {loadingMessage}
          <br />
          <br />
          <button
            className="hover:cursor-pointer"
            onClick={handleErrorModalShow}
          >
            <FormBtn buttonTitle={"TRY AGAIN"} />
          </button>
          <br />
          <nav className="text-center mt-[10px] text-[15px]">
            <p>or</p>
            <a className="cursor-pointer underline" onClick={handleGoToLogin}>
              Go to login
            </a>
          </nav>
        </motion.div>
      </section>
    </div>
  );
};

export default EmailExistsMsgModal;
