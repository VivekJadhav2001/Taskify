import { Plus } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

const TodoInput = () => {
  const [text, setText] = useState("");
  const [error,setError] = useState(false)
  const [errorMessage,setErrorMessage] = useState("")

  const dispatch = useDispatch()

  function handleAdd(){
    if(text.trim()===""){
        setError(true)
        setErrorMessage("Please fill the valid To-do.")
        return
    }
    dispatch(addTodo(text))
    setText("")
  }

  return (
    <div className="flex items-center gap-3 w-full max-w-md mx-auto mt-6">
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {error && <p className="text-red-500">{errorMessage}</p>}
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-600 transition"
      >
        <Plus size={22} />
      </button>
    </div>
  );
};

export default TodoInput;
