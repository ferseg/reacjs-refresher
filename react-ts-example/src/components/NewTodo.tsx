import { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (content: string) => void }> = ({
  onAddTodo,
}) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (evt: React.FormEvent) => {
    evt.preventDefault();
    const text = todoTextInputRef.current!.value;
    if (text.trim().length === 0) {
      return;
    }
    onAddTodo(text);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
