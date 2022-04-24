import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import axios from 'axios';

import { PageLayout,SubjectCard } from '../../components';
import AddSubject from './components/AddSubject';
import SubjectList from './components/SubjectList';
import SubjectDetail from './components/SubjectDetail';


const SubjectPage = () => {

    return (
        <PageLayout>
            {/* <SubjectList/> */}
            <SubjectDetail/>
        </PageLayout >
    );
};

export default SubjectPage;