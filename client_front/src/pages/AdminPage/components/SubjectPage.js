import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { LoadingAndError } from '../../../components';

const SubjectPage = () => {
    const navigate = useNavigate();
    const [allSubjects, setAllSubjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reload, setReload] = useState(false);

    const onSubjectClickHandler = (id) => {
        navigate(`/subject/${id}`);
    };

    const onSubjectDeleteHandler = async (id) => {
        await axios.delete(`https://localhost:7061/api/subject/${id}`);
        setReload(true);
    };

    const onSubjectHideHandler = async (id) => {
        await axios.put(`https://localhost:7061/api/subject/hide/${id}`, {
            headers: { 'Content-Type': 'application/json' },
        });
        setReload(true);
    };

    const onSubjectShowHandler = async (id) => {
        await axios.put(`https://localhost:7061/api/subject/appear/${id}`, {
            headers: { 'Content-Type': 'application/json' },
        });
        setReload(true);
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
        setReload(false);
    }, [reload]);

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
                            onClick={onSubjectClickHandler.bind(this, subject.id)}
                        >
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-3 fw-bold" style={{ textAlign: 'left' }}>
                                    {subject.title}
                                </h5>
                            </div>
                            <p className="text-truncate" style={{ textAlign: 'left', fontSize: '14px' }}>
                                {subject.desc}
                            </p>
                            <p className="mt-1" style={{ textAlign: 'left', fontSize: '14px' }}>
                                Created by {subject.username} <br></br>At {subject.created_At}
                            </p>
                        </li>
                        <div className="flex-column">
                            <button
                                className="btn-danger mx-1 float-end"
                                onClick={onSubjectDeleteHandler.bind(this, subject.id)}
                            >
                                DELETE
                            </button>
                            {subject.isHide ? (
                                <button
                                    className="btn-success mx-1 float-end"
                                    onClick={onSubjectShowHandler.bind(this, subject.id)}
                                >
                                    SHOW
                                </button>
                            ) : (
                                <button
                                    className="btn-warning mx-1 float-end"
                                    onClick={onSubjectHideHandler.bind(this, subject.id)}
                                >
                                    HIDE
                                </button>
                            )}
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default SubjectPage;
