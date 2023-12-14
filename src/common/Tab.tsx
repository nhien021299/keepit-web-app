import TabColor from "../components/tab_color/TabColor";
import TabImage from "../components/tab_image/TabImage";
import TabLayout from "../components/tab_layout/TabLayout";

export const tabs = [
  {
    id: "color",
    name: "COLOR",
    body: <TabColor />,
  },
  {
    id: "layout",
    name: "LAYOUT",
    body: <TabLayout/>,
  },
  {
    id: "image",
    name: "IMAGE",
    body: <TabImage/>,
  },
];
