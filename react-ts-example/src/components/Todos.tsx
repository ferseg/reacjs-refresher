import React from "react";
import { Todo } from "../models/todo";
import TodoItem from "./TodoItem";

export interface TodosProps {
  items: Todo[];
  onRemove: (id: string) => void
}


const Todos: React.FC<TodosProps> = ({items, onRemove}) => {
  return (
  <ul>
    {items.map(item => <TodoItem key={item.id} todo={item} onRemove={onRemove}/>)}
  </ul>
  )
}

export default Todos;
