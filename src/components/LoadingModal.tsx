import React from "react";
import { ClipLoader } from "react-spinners";

type Props = {
  loadingMessage: string;
};

const LoadingModal = ({ loadingMessage }: Props) => {
  return (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      className="absolute  h-screen z-10"
    >
      <section className="flex h-screen  w-screen items-center justify-center relative">
        <div className="p-12 flex flex-col justify-center items-center w-29 h-44 place-content-center bg-white rounded-[12px] z-20">
          <ClipLoader />
          <br />
          {loadingMessage}
        </div>
      </section>
    </div>
  );
};

export default LoadingModal;
