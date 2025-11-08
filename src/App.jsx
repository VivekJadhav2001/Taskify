import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TodoPage from "./pages/TodoPage";

const App = () => {
  const { user } = useSelector((state) => state.auth);

  // Protected Route Wrapper
  const PrivateRoute = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            user ? <Navigate to="/todos" /> : <Navigate to="/login" />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/todos"
          element={
            <PrivateRoute>
              <TodoPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
