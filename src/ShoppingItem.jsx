function ShoppingItem({ item, onDelete }) {
  return (
    <div className="shopping-item">
      <div className="item-info">
        <span className="item-name">{item.name}</span>
        <span className="item-price">{item.price} сом</span>
      </div>

      <button
        className="delete-button"
        onClick={() => onDelete(item.id)}
      >
        Удалить
      </button>
    </div>
  );
}

export default ShoppingItem;