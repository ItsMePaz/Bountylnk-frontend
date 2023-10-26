import React from "react";

type Props = {
  buttonTitle: string;
};

const Something = ({ buttonTitle }: Props) => {
  return <div>{buttonTitle}</div>;
};

export default Something;
