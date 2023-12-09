import { useState } from "react";

interface Props {
  items?: string[];
  title?: string;
  onSelected?: (item: string) => void;
}

function ListGroup({ items, title, onSelected }: Props) {
  const [selectedIndex, setIndex] = useState(-1);

  const handleOnClicked = (index: number) => {
    if (index === selectedIndex) {
      setIndex(-1);
      return;
    }
    setIndex(index);
  };

  return (
    <>
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
                key={e}
                onClick={() => {
                  handleOnClicked(index);
                  if (onSelected != null) onSelected!(e);
                }}
              >
                {e}
              </li>
            );
          })}
        </ul>
      ) : (
        <h6>Empty List</h6>
      )}
    </>
  );
}

export default ListGroup;
