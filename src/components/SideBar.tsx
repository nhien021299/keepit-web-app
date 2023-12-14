import { TabBar } from "./TabBar";

const SideBar = () => {
  return (
    <div className="px-4 h-[100vh] w-[300px] bg-[#202024]">
      <div className="text-center font-mono text-[2em] font-bold text-white">
        KEEBIT
      </div>
      <TabBar />
    </div>
  );
};

export default SideBar;
