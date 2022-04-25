import { useState, useEffect } from 'react';
import axios from 'axios';

import { SubjectCard } from '../../../components';

const SubjectList = () => {
    const [allSubjects, setAllSubjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reload, setReload] = useState(false); 

    useEffect(() => {
        const fetchAllSubjects = async () => {
            try {
                const res = await axios.get('https://localhost:7061/api/subject');
                setAllSubjects(res.data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        }
        fetchAllSubjects();
    }, [reload]);


    return (
        <div className='container'>
            <h1 style={{ margin: "30px 0" }}>All Subjects</h1>
            <div className="row">
                {allSubjects.map((subject) =>
                    <SubjectCard data={subject} />
                )}
            </div>
        </div>
    );
};

export default SubjectList;
