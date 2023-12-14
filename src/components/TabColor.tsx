import ColorPicker from "./ColorPicker";
import CustomCard from "./CustomCard";

const TabColor = () => {
  return (
    <div>
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-white"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          className="mb-3 block w-full rounded-[5px] bg-[#38383f] p-2.5 text-sm text-white"
          placeholder="GMK Blue Samurai"
          required
        />
      </div>
      <div className="mb-2 text-sm font-medium text-white">ColorWay</div>
      <div className="flex flex-col gap-4 text-sm text-white">
        <CustomCard>
          <ColorPicker defaultColor="#263548">
            <div className="mr-2">Base</div>
          </ColorPicker>
        </CustomCard>
        <CustomCard>
          <ColorPicker defaultColor="#35393a">
            <div className="mr-2">Mods</div>
          </ColorPicker>
        </CustomCard>
        <CustomCard>
          <ColorPicker defaultColor="#bca66b">
            <div className="mr-2">Accent</div>
          </ColorPicker>
        </CustomCard>
      </div>
    </div>
  );
};

export default TabColor;
