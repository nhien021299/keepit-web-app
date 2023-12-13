import { useState } from "react";
import { ConfigModelType } from "../models/ConfigModel";

interface Props {
  items?: ConfigModelType[];
  title?: string;
  onSelected?: (item: string) => void;
}

function ListGroup({ items = [], title = "Title", onSelected }: Props) {
  const [selectedIndex, setIndex] = useState(-1);

  const handleOnClicked = (index: number) => {
    if (index === selectedIndex) {
      setIndex(-1);
      return;
    }
    setIndex(index);
  };

  return (
    <div
      style={{
        margin: 16,
        width: 400,
      }}
    >
      <h1>{title}</h1>
      {items?.length != null ? (
        <ul className="list-group">
          {items?.map((e, index) => {
            return (
              <li
                className={
                  selectedIndex === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
                key={e.name}
                onClick={() => {
                  handleOnClicked(index);
                  if (onSelected != null) onSelected!(e.color ?? "");
                }}
              >
                {e.name}
              </li>
            );
          })}
        </ul>
      ) : (
        <h6>Empty List</h6>
      )}
    </div>
  );
}

export default ListGroup;
