import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  Dashboard,
  Exercises,
  Foods,
  Goals,
  Login,
  Signup,
} from "./pages/index";
import { Navbar, ProtectedRoute } from "./components/index";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/exercises"
          element={
            <ProtectedRoute>
              <Exercises />
            </ProtectedRoute>
          }
        />
        <Route
          path="/foods"
          element={
            <ProtectedRoute>
              <Foods />
            </ProtectedRoute>
          }
        />
        <Route
          path="/goals"
          element={
            <ProtectedRoute>
              <Goals />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
