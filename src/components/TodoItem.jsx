import { useState } from "react";
import { Trash2, Edit2, CheckCircle, Circle } from "lucide-react";
import { deleteTodo, toggleComplete, editTodo } from "../features/todos/todoSlice"
import { useDispatch } from "react-redux";

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const dispatch = useDispatch()

  const handleSave = () => {
    if (editText.trim() === "") return;
    dispatch(editTodo({ id: todo.id, text: editText }));
    setIsEditing(false);
  };
  

  return (
    <div className="flex items-center justify-between bg-white shadow-sm p-3 rounded-xl border mb-2">
      <div className="flex items-center gap-3">
        <button onClick={() => dispatch(toggleComplete(todo.id))}>
          {todo.completed ? (
            <CheckCircle className="text-green-500" size={22} />
          ) : (
            <Circle className="text-gray-400" size={22} />
          )}
        </button>

        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleSave}
            className="border-b border-gray-300 outline-none text-gray-700"
            autoFocus
          />
        ) : (
          <span
            className={`text-gray-800 ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsEditing((prev) => !prev)}
          className="text-blue-500 hover:text-blue-700"
        >
          <Edit2 size={20} />
        </button>
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="text-red-500 hover:text-red-700"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
