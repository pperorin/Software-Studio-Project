import { Navigate, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomePage, ProfilePage, SubjectPage, AdminPage } from './pages';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

import { useDispatch } from 'react-redux';
import { userLogout } from './state/auth';
import AnnouncementPage from './pages/AdminPage/components/AnnouncementPage';

const Logout = () => {
    const dispatch = useDispatch();
    dispatch(userLogout());
    return <Navigate to="/login" />;
};

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="subject" element={<SubjectPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="/admin/*" element={<AdminPage />} />
        </Routes>
    );
}

export default App;
