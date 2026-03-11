import { useEffect, useState } from "react";
import Form from "./components/form";
import ListItems from "./components/listItems";
import Title from "./components/title";

function App() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });
  
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items]);

  const [description, setDescription] = useState("");

  function handleAddItem(item) {
    setItems((prevItem) => [...prevItem, item]);
  }

  function handelToggleItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item,
      ),
    );
  }
  function handleDeletedItem(id) {
    setItems (items.filter ((item) => item.id !== id));
  }

  return (
    <main id="main">
      <div className="container">
        <div className="todo-list">
          <Title />
          <Form
            description={description}
            setDescription={setDescription}
            onAddItem={handleAddItem}
          />
          <ListItems items={items} onToggleItem={handelToggleItem} onDeletedItem={handleDeletedItem}/>
        </div>
      </div>
    </main>
  );
}

export default App;
