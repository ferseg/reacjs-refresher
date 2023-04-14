import styles from "./TextInput.module.css";

const TextInput = ({ title, value, onChange }) => {
  const changeHandler = (evt) => {
    onChange(evt.target.value);
  };
  return (
    <div className={styles["text-input"]}>
      <label htmlFor={title.toLowerCase()}>{title}</label>
      <input id={title.toLowerCase()} type="text" value={value} onChange={changeHandler} />
    </div>
  );
};

export default TextInput;
