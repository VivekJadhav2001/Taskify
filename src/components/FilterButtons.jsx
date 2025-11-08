import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/todos/todoSlice";

const FilterButtons = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.todos);

  const buttons = [
    { label: "All", value: "all" },
    { label: "Completed", value: "completed" },
    { label: "Not Completed", value: "notCompleted" },
  ];

  return (
    <div className="flex justify-center gap-4 mt-4">
      {buttons.map((btn) => (
        <button
          key={btn.value}
          onClick={() => dispatch(setFilter(btn.value))}
          className={`px-4 py-2 rounded-xl border transition ${
            filter === btn.value
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
          }`}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
