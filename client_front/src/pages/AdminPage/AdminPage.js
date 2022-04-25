import { Route, Routes } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { PageLayout } from '../../components';

import Sidebar from './components/Sidebar';
import MembersPage from './components/MembersPage';
import SubjectPage from './components/SubjectPage';
import AnnouncementPage from './components/AnnouncementPage';

const AdminPage = () => {
    const user = useSelector((state) => state.auth);
    return (
        <PageLayout>
            <div className="row">
                <div className="col-3 border text-center">
                    <Sidebar />
                </div>
                <div className="col-9 border">
                    <div className="mt-5">
                        {user.user?.isAdmin || false? (
                            <Routes>
                                <Route>
                                    <Route path="/members" element={<MembersPage />} />
                                    <Route path="/subject" element={<SubjectPage />} />
                                    <Route path="/announcement" element={<AnnouncementPage />} />
                                </Route>
                            </Routes>
                        ) : (
                            <p className="alert alert-danger">Unauthorized!</p>
                        )}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default AdminPage;
