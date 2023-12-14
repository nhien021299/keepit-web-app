import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const CustomCard = ({ children }: Props) => {
  return (
    <div className="py-2 px-2 w-full rounded-[5px] bg-[#38383f]">{children}</div>
  );
};

export default CustomCard;
