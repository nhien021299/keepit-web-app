import { useState } from "react";
import ListGroup from "./components/ListGroup";
import { configModel } from "./models/ConfigModel";

function App() {
  const colors = [
    configModel({ name: "Chartreuse", color: "#7fff00" }),
    configModel({ name: "Blue", color: "#0000ff" }),
    configModel({ name: "Chocolate", color: "#d2691e" }),
  ];

  const backgrounds = [
    configModel({ name: "Cornflowerblue", color: "#6495ed" }),
    configModel({ name: "Cornsilk", color: "#fff8dc" }),
    configModel({ name: "Crimson", color: "#dc143c" }),
  ];

  const [color, setColor] = useState("");
  const [background, setBackground] = useState("");
  const [isVisible, setVisible] = useState(false);

  function onSelectColor(color: string) {
    setColor(color ?? "");
    setVisible(true);
  }

  function onSelectBg(background: string) {
    setBackground(background ?? "");
    setVisible(true);
  }

  function onClose() {
    setVisible(false);
  }

  return (
    <>
      <ListGroup
        title="Foreground color"
        items={colors}
        onSelected={onSelectColor}
      />
      <ListGroup
        title="Foreground color"
        items={backgrounds}
        onSelected={onSelectBg}
      />
      {isVisible && (
        <div
          style={{
            background: `${background}`,
            margin: 16,
            padding: 16,
            borderRadius: 12,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h4
            style={{
              color: `${color}`,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Result
          </h4>
          <button
            className="btn-close"
            color="none"
            aria-label="Close"
            onClick={onClose}
          ></button>
        </div>
      )}
    </>
  );
}

export default App;
