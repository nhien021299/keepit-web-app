import { colorState } from "../../global_state/global_state";
import ColorPicker from "../ColorPicker";
import CustomCard from "../CustomCard";
import { useSnapshot } from "valtio";
import { handleChangeColor } from "./TabEditorController";

const TabEditor = () => {
  const colorSnap = useSnapshot(colorState);
  return (
    <div>
      <div className="mb-2">
        <div className="mb-2 text-lg font-medium text-white">Layout</div>
        <CustomCard>
          <div className=" text-base text-white">
            65%
          </div>
        </CustomCard>
      </div>
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-lg font-medium text-white"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          className="mb-3 block w-full rounded-[5px] bg-[#38383f] p-2.5 text-base text-white"
          placeholder="GMK Blue Samurai"
          required
        />
      </div>
      <div className="mb-2 text-lg font-medium text-white">ColorWay</div>
      <div className="flex flex-col gap-4 text-base text-white">
        <CustomCard>
          <ColorPicker
            defaultColor={colorSnap.base}
            onChange={(value) => handleChangeColor({ base: value })}
          >
            <div className="mr-2">Base</div>
          </ColorPicker>
        </CustomCard>
        <CustomCard>
          <ColorPicker
            defaultColor={colorSnap.mods}
            onChange={(value) => handleChangeColor({ mods: value })}
          >
            <div className="mr-2">Mods</div>
          </ColorPicker>
        </CustomCard>
        <CustomCard>
          <ColorPicker
            defaultColor={colorSnap.accent}
            onChange={(value) => handleChangeColor({ accent: value })}
          >
            <div className="mr-2">Accent</div>
          </ColorPicker>
        </CustomCard>
      </div>
    </div>
  );
};

export default TabEditor;
