import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const {todos,filter} = useSelector((state)=>state.todos)

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "notCompleted") return !todo.completed;
    return true;
  }).sort((a, b) => Number(a.completed) - Number(b.completed));;

  return (
    <div className="w-full max-w-md mx-auto mt-6">
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <p className="text-center text-gray-400">No todos found</p>
      )}
    </div>
  );
};

export default TodoList;
