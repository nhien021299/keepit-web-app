import { ChangeEvent, useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#aabbcc");

  function onColorChange(event: ChangeEvent<HTMLInputElement>) {
    setColor(event.target.value);
  }

  return (
    <div className="relative flex flex-row items-center justify-center">
      <input
        type={"color"}
        value={color}
        onChange={onColorChange}
        className="absolute w-full opacity-0"
      />
      <div
        style={{
          background: color,
        }}
        className="h-8 w-8 rounded-lg"
      ></div>
    </div>
  );
};

export default ColorPicker;
