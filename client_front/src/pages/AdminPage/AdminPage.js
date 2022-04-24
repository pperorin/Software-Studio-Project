import { Route, Routes } from 'react-router-dom';

import { PageLayout } from '../../components';

import Sidebar from './components/Sidebar';
import MembersPage from './components/MembersPage';
import SubjectPage from './components/SubjectPage';
import AnnouncementPage from './components/AnnouncementPage';

const AdminPage = () => {
    return (
        <PageLayout>
            <div className="row">
                <div className="col-3 border text-center">
                    <Sidebar />
                </div>
                <div className="col-9 border">
                    <div className="mt-5">
                        <Routes>
                            <Route>
                                <Route path="/members" element={<MembersPage />} />
                                <Route path="/subject" element={<SubjectPage />} />
                                <Route path="/announcement" element={<AnnouncementPage />} />
                            </Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default AdminPage;
