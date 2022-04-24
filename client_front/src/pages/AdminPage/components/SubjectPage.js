import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { LoadingAndError } from '../../../components';

const SubjectPage = () => {
    const navigate = useNavigate();
    const [allSubjects, setAllSubjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const onSubjectClickHandler = (id) => {
        navigate(`/`);
    };

    useEffect(() => {
        const fetchAllSubject = async () => {
            try {
                const response = await axios.get('https://localhost:7061/api/subject/');
                setAllSubjects(response.data);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };
        fetchAllSubject();
    }, []);

    return (
        <div className="container">
            <h2 className="mb-4">All Subject</h2>
            <LoadingAndError isLoading={isLoading} error={error} />
            {!isLoading &&
                error === null &&
                allSubjects.map((subject, index) => (
                    <div className="list-group mt-4" key={index}>
                        <li
                            className="list-group-item list-group-item-action flex-column border border-dark align-items-start mb-2"
                            onClick={onSubjectClickHandler.bind(this, 1)}
                        >
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-3 fw-bold">{subject.title}</h5>
                                <small>{subject.created_At}</small>
                            </div>
                            <p className="text-truncate" style={{ textAlign: 'left', fontSize: '14px' }}>
                                {subject.desc}
                            </p>
                        </li>
                        <div className="flex-column">
                            <button className="btn-danger mx-1 float-end">DELETE</button>
                            <button className="btn-warning mx-1 float-end">HIDE</button>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default SubjectPage;
