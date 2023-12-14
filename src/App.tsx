import { useSnapshot } from "valtio";
import SideBar from "./components/SideBar";
import { colorState } from "./global_state/global_state";
import CustomCard from "./components/CustomCard";

function App() {
  const colorSnap = useSnapshot(colorState);

  return (
    <div className="flex flex-row">
      <SideBar />
      <div className="m-6 flex flex-col gap-2">
        <div
          className="h-[20px] w-[300px]"
          style={{
            background: colorSnap.base,
          }}
        />

        <div
          className="h-[20px] w-[300px]"
          style={{
            background: colorSnap.mods,
          }}
        />

        <div
          className="h-[20px] w-[300px]"
          style={{
            background: colorSnap.accent,
          }}
        />
      </div>
    </div>
  );
}

export default App;
