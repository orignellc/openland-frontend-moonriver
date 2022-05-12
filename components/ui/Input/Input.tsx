import { FC } from "react";

interface InputProps {
  label: string;
  placeholder?: string
  info?: string
  infoCircle?: boolean
}

const Input: FC<InputProps> = (props) => {
  const { label, placeholder, info, infoCircle } = props;

  return (
    <div className="flex flex-col mb-6">
      <div className="flex justify-between">
        <label className="font-medium text-[#1C2420] mb-[6px]" htmlFor={label}>
          {label}
        </label>

        {infoCircle &&
          <img src="/assets/images/svg/help-circle.svg" alt="help" />
        }
      </div>
      <input placeholder={placeholder} id={label} className="border border-[#D6D6DD] rounded-[4px] shadow-sm focus:outline-none px-2 py-2" />
      {info && <span className="text-sm lg:text-base text-[rgba(85,85,85,0.6)]">{info}</span>}
    </div>
  );
};

export default Input;
