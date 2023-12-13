import { useEffect, useState } from "react";
import ListGroup from "./components/ListGroup";
import { configModel } from "./models/ConfigModel";
import SideBar from "./components/SideBar";

function App() {
  const backgrounds = [
    configModel({ name: "Cornflowerblue", color: "bg-[#6495ed]" }),
    configModel({ name: "Cornsilk", color: "bg-[#fff8dc]" }),
    configModel({ name: "Crimson", color: "bg-[#dc143c]" }),
  ];

  const [background, setBackground] = useState("");

  function onSelectBg(background: string) {
    setBackground(background ?? "black");
  }

  useEffect(() => {
    setBackground(background ?? "");
  }, [background]);

  return (
    <div className={`${background} flex  h-screen flex-row`}>
      <SideBar />

      <ListGroup
        title="Background color"
        items={backgrounds}
        onSelected={onSelectBg}
      />
    </div>
  );
}

export default App;
