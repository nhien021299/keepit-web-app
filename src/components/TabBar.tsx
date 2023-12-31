import { useRef, useState, useEffect } from "react";
import { tabs } from "../common/Tab.tsx";

export const TabBar = () => {
  const tabsRef = useRef<(HTMLElement | null)[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    if (activeTabIndex === null) {
      return;
    }

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex]);

  return (
    <div>
      <div className="relative flex flex-row mb-4 h-10 w-auto justify-evenly  items-center rounded-xl border border-black/40 bg-[#38383f] backdrop-blur-sm">
        <span
          className="absolute bottom-0 top-0 my-auto flex overflow-hidden rounded-xl shadow-2xl transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        >
          <span className="h-full w-full rounded-xl bg-[#ff4747]/30" />
        </span>
        {tabs.map((tab, index) => {
          const isActive = activeTabIndex === index;
          return (
            <button
              key={index}
              ref={(el) => (tabsRef.current[index] = el)}
              className={`${
                isActive ? `` : `hover:text-neutral-300`
              } my-auto w-full cursor-pointer select-none rounded-full px-4 text-center font-light text-white`}
              onClick={() => setActiveTabIndex(index)}
            >
              <div className=" font-mono text-sm">{tab.name}</div>
            </button>
          );
        })}
      </div>
      <div className="flex flex-col text-2xl">{tabs[activeTabIndex].body}</div>
    </div>
  );
};
