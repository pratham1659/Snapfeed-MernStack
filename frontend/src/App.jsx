import HomePage from "./pages/home/HomePage";
import SignupPage from "./pages/auth/SignupPage";
import Sidebar from "./components/common/Sidebar";
import LoginPage from "./pages/auth/LoginPage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="flex max-w-6xl mx-auto">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
