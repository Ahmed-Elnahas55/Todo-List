import Item from "./item";
function ListItems({ items, onToggleItem, onDeletedItem }) {
  return (
    <ul className="list-items">
      {items.map((item) => {
        const { id, description, selected } = item;
        return (
          <Item
            key={id}
            id={id}
            description={description}
            selected={selected}
            onToggleItem={onToggleItem}
            onDeletedItem={onDeletedItem}
          />
        );
      })}
    </ul>
  );
}

export default ListItems;
