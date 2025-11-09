import { Plus } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

const TodoInput = () => {
  const [text, setText] = useState("");
  const [deadline, setDeadline] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  function handleAdd() {
    if (text.trim() === "") {
      setError(true);
      setErrorMessage("Please fill a valid To-do.");
      return;
    }

    dispatch(
      addTodo({
        text,
        deadline,
        createdAt: new Date().toLocaleDateString(),
      })
    );
    setText("");
    setDeadline("");
    setError(false);
    setErrorMessage("");
  }

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto mt-6 space-y-3">
      <div className="flex items-end gap-3 w-full">
        <input
          type="text"
          placeholder="Add a new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Deadline Input */}
        <div className="flex flex-col items-start">
          <label className="text-xs text-gray-500 mb-1 ml-1">Deadline</label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-600 transition"
        >
          <Plus size={22} />
        </button>
      </div>

      {error && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </div>

  );
};

export default TodoInput;
