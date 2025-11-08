import Navbar from "../components/Navbar";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import FilterButtons from "../components/FilterButtons";

const TodoPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-2xl mx-auto p-4">
        <TodoInput />
        <FilterButtons />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoPage;
