import { motion } from "framer-motion";
import React from "react";

type Props = {
  buttonTitle: string;
};

const FormBtn = ({ buttonTitle }: Props) => {
  return (
    <motion.div whileHover={{ scale: 1.06 }} className="buttonStyle">
      {buttonTitle}
    </motion.div>
  );
};

export default FormBtn;
