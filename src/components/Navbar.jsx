import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import ThemeBtn from "./ThemeBtn";

function Navbar() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    return (
        <nav className="flex justify-between items-center bg-blue-600 text-white p-4">
            <h1 className="text-xl font-semibold">Taskify</h1>
            <div className="flex items-center gap-4">
                <ThemeBtn/>
                <span>{user?.name}</span>
                <button
                    onClick={() => dispatch(logout())}
                    className="bg-white text-blue-600 px-3 py-1 rounded-lg hover:bg-gray-100"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
