import { Todo } from "../models/todo";

interface TodoItemProps {
  todo: Todo,
  onRemove: (id: string) => void
}
const TodoItem: React.FC<TodoItemProps> = ({ todo, onRemove }) => {
  return <li>{todo.content} <button onClick={() => onRemove(todo.id)}>Remove</button></li>;
};

export default TodoItem;
