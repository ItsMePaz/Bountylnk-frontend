import React from "react";

type Props = {
  buttonTitle: string;
};

const FormBtn = ({ buttonTitle }: Props) => {
  return <div className="buttonStyle">{buttonTitle}</div>;
};

export default FormBtn;
