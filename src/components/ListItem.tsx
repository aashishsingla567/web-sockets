import styles from "./listItem.module.css";

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ListItem = ({
  item,
  onEdit,
  onDelete,
  className,
}: {
  className?: string;
  item: Item;
  onEdit: (item: Item) => void;
  onDelete: (item: Item) => void;
}) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <div className={styles.imageWrap}>
        <img className={styles.image} src={item.image} alt={item.name} />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{item.name}</div>
      </div>
      <div className={styles.actions}>
        <button onClick={() => onEdit(item)}>Edit</button>
        <button onClick={() => onDelete(item)}>Delete</button>
      </div>
    </div>
  );
};

export default ListItem;
