import React from "react";

type Props = {
  loadingMessage: string;
};

const LoadingModal = ({ loadingMessage }: Props) => {
  return (
    <div className="absolute place-content-center inset-0 bg-black bg-opacity-50 z-10 ">
      <section className="flex h-screen  items-center justify-center relative">
        <div className="p-12 flex flex-col justify-center items-center w-28 h-44 place-content-center bg-white rounded-[12px] z-20">
          {loadingMessage}
        </div>
      </section>
    </div>
  );
};

export default LoadingModal;
