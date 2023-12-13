import { SlidingTabBar } from "./SlidingTabBar";

const SideBar = () => {
  return (
    <div className=" w-[300px] bg-slate-600">
      <div className=" py-4 text-center font-serif text-3xl font-bold text-white">
        KEEPIT
      </div>
      <SlidingTabBar />
    </div>
  );
};

export default SideBar;
