import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import axios from 'axios';

import { PageLayout,SubjectCard } from '../../components';
import AddSubject from './components/AddSubject';
import SubjectList from './components/SubjectList';


const SubjectPage = () => {

    return (
        <PageLayout>
            <SubjectList/>
        </PageLayout >
    );
};

export default SubjectPage;