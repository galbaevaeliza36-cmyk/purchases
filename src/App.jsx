import { useState } from "react";
import ShoppingItem from "./ShoppingItem";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function addItem(event) {
    event.preventDefault();

    if (name.trim() === "" || price === "") {
      alert("Заполните название и цену товара!");
      return;
    }

    if (Number(price) < 0 || !Number.isFinite(Number(price))) {
      alert("Введите корректную цену!");
      return;
    }

    const newItem = {
      id: Date.now(),
      name: name.trim(),
      price: Number(price),
    };

    setItems([...items, newItem]);

    setName("");
    setPrice("");
  }

  function deleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  const totalPrice = items.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="app">
      <h1>Мой список покупок</h1>

      <form className="shopping-form" onSubmit={addItem}>
        <label htmlFor="name">Название товара</label>

        <input
          id="name"
          type="text"
          placeholder="Например, хлеб"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <label htmlFor="price">Цена (сом)</label>

        <input
          id="price"
          type="number"
          placeholder="Введите цену"
          min="0"
          step="any"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          required
        />

        <button className="add-button" type="submit">
          Добавить товар
        </button>
      </form>

      <h2>Мои покупки</h2>

      <div className="shopping-list">
        {items.length === 0 ? (
          <p className="empty-message">
            Список покупок пока пуст.
          </p>
        ) : (
          items.map((item) => (
            <ShoppingItem
              key={item.id}
              item={item}
              onDelete={deleteItem}
            />
          ))
        )}
      </div>

      <div className="total">
        <span>Общая стоимость:</span>
        <span>{totalPrice.toLocaleString("ru-RU")} сом</span>
      </div>
    </div>
  );
}

export default App;