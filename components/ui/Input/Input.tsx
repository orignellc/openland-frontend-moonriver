import { FC } from "react";

interface InputProps {
  label: string;
}

const Input: FC<InputProps> = (props) => {
  const { label } = props;

  return (
    <div className="flex flex-col mb-6">
      <label className="font-medium text-[#1C2420] mb-[6px]" htmlFor={label}>
        {label}
      </label>
      <input id={label} className="border border-[#D6D6DD] rounded-[4px] shadow-sm focus:outline-none px-2 py-2" />
    </div>
  );
};

export default Input;
