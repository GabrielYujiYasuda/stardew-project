import Item from "./Item";
import "./List.css";

export default function List() {
  return (
    <>
      <div>
        <ul className="ul">
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </ul>
      </div>
    </>
  );
}
