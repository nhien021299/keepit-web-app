import TabEditor from "../components/tab_editor/TabEditor";
import TabImage from "../components/tab_image/TabImage";
import TabLayout from "../components/tab_layout/TabLayout";

export const tabs = [
  {
    id: "editor",
    name: "EDITOR",
    body: <TabEditor />,
  },
  // {
  //   id: "layout",
  //   name: "LAYOUT",
  //   body: <TabLayout/>,
  // },
  {
    id: "image",
    name: "IMAGE",
    body: <TabImage />,
  },
];
