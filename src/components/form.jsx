function Form({ description, setDescription, onAddItem }) {
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) {
      return alert("You must add a value");
    }
    const newItem = {
      id: Date.now(),
      description,
      selected: false,
    };
    onAddItem(newItem);
    setDescription("")
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-control">
        <input
          type="text"
          placeholder="Enter a Task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn-add">Add</button>
      </div>
    </form>
  );
}

export default Form;
