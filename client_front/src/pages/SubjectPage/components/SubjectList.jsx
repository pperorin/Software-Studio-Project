import { useState, useEffect } from 'react';
import axios from 'axios';

import { SubjectCard } from '../../../components';

const SubjectList = () => {
    const [allSubjects, setAllSubjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAllSubjects = async () => {
            try {
                const res = await axios.get('https://localhost:7061/api/subject/');
                setAllSubjects(res.data);
                setIsLoading(false);
            } catch (error) {
                alert(error.message);
                setIsLoading(false);
            }
        };
        fetchAllSubjects();
    }, []);

    return (
        <div className="container">
            <h1 style={{ margin: '30px 0' }}>All Subjects</h1>
            <div className="row">{!isLoading && allSubjects.map((subject, index) => <SubjectCard data={subject} key={index}/>)}</div>
        </div>
    );
};

export default SubjectList;
