import { Check } from "lucide-react";

function Item({ id, description, selected, onToggleItem, onDeletedItem }) {
  return (
    <li className="list-item">
      <div>
        <label className="custom-checkbox">
          <input type="checkbox" onClick={() => onToggleItem(id)} />
          {selected ? <Check /> : <span className="checkmark"></span>}
        </label>
        <span className={`description ${selected && "selected"} `}>{description}</span>
      </div>
      <button className="btn-close" onClick={() => onDeletedItem(id)}>&times;</button>
    </li>
  );
}

export default Item;
