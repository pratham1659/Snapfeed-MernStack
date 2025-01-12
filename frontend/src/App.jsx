import HomePage from "./pages/home/HomePage";
import SignupPage from "./pages/auth/SignupPage";
import Sidebar from "./components/common/Sidebar";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/auth/LoginPage";
import { Route, Routes } from "react-router-dom";
import RightPanel from "./components/common/RightPanel";
import NotificationPage from "./pages/notification/NotificationPage";
import ProfilePage from "./pages/profile/ProfilePage";
function App() {
  return (
    <div className="flex max-w-6xl mx-auto">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/profile/johndoe" element={<ProfilePage />} />
      </Routes>
      <RightPanel />
      <Toaster />
    </div>
  );
}

export default App;
