import { ChangeEvent, ReactNode, useState } from "react";

interface Props {
  children?: ReactNode;
  defaultColor?: string;
  onChange?: (value: string)=> void; 
}

const ColorPicker = ({ children, defaultColor, onChange }: Props) => {
  const [color, setColor] = useState(defaultColor);

  function onColorChange(event: ChangeEvent<HTMLInputElement>) {
    setColor(event.target.value);
    if(onChange) onChange(event.target.value);
  }

  return (
    <div className="relative flex flex-row items-center justify-between">
      <input
        type={"color"}
        value={color}
        onChange={onColorChange}
        className="absolute w-full opacity-0"
      />
      {children}
      <div
        style={{
          background: color,
        }}
        className="h-8 w-3/4 rounded-[5px]"
      />
    </div>
  );
};

export default ColorPicker;
