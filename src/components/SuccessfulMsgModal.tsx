import { motion } from "framer-motion";
import React, { useState } from "react";
import FormBtn from "./FormBtn";
import checked from "../../public/images/checked.png";

type Props = {
  loadingMessage: string;

  setIsSuccessful: (open: boolean) => void;
};

const SuccessfulMsgModal = ({ loadingMessage, setIsSuccessful }: Props) => {
  const handleModalShow = () => {
    setIsSuccessful(false);
  };
  return (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      className="absolute  h-screen z-10"
    >
      <section className="flex h-screen  w-screen items-center justify-center relative">
        <motion.div
          className="p-12 flex flex-col justify-center items-center w-29 h-44 place-content-center bg-white rounded-[12px] z-20"
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
            src={checked.src}
            alt=""
          />
          <br />
          {loadingMessage}
          <br />
          <br />
          <p>We have sent you an email to verify your account!</p>
          <br />
          <button className="hover:cursor-pointer" onClick={handleModalShow}>
            <FormBtn buttonTitle={"OKAY"} />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default SuccessfulMsgModal;
