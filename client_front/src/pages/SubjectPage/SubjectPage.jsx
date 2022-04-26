import { Route, Routes } from 'react-router-dom';

import { PageLayout } from '../../components';
import AddSubject from './components/AddSubject';
import SubjectList from './components/SubjectList';
import SubjectDetail from './components/SubjectDetail';
import Slidebar from './components/Slidebar';


const SubjectPage = () => {

    return (
        <PageLayout>
            <Slidebar/>
            <Routes>
                < Route>
                    <Route path="/" element={<SubjectList/>}/>
                    <Route path="/:id" element={<SubjectDetail/>} />
                    <Route path="/addSubject" element={<AddSubject/>} />
                </Route>
            </Routes>
        </PageLayout >
    );
};

export default SubjectPage;