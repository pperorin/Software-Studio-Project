import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import AddComment from './AddComment';
import CommentList from './CommentList';
const SubjectDetail = () => {
    const user = useSelector((state) => state.auth);

    const [subject, setSubjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [reload, setReload] = useState(false);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAllSubject = async () => {
            try {
                const response = await axios.get(`https://localhost:7061/api/subject/${id}`);
                setSubjects(response.data);
                setIsLoading(false);
            } catch (error) {
                alert(error.message);
                setIsLoading(false);
            }
        };
        fetchAllSubject();
        setReload(false);
    }, [id, reload]);

    const onClickHideSubject = async () => {
        try {
            await axios.put(`https://localhost:7061/api/subject/hide/${subject.id}`, {
                headers: { 'Content-Type': 'application/json' },
            });
            subject.isHide = true;
        } catch (error) {
            alert(error.message);
        }
        setReload(true);
    };

    const onClickUnHideSubject = async () => {
        try {
            await axios.put(`https://localhost:7061/api/subject/appear/${subject.id}`, {
                headers: { 'Content-Type': 'application/json' },
            });
            subject.isHide = false;
        } catch (error) {
            alert(error.message);
        }
        setReload(true);
    };

    const onClickDeleteSubject = async () => {
        try {
            await axios.delete(`https://localhost:7061/api/subject/${subject.id}`, {
                headers: { 'Content-Type': 'application/json' },
            });
            alert('Delete Success');
            navigate('/subject');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <>
            {!isLoading && (
                <div className="container addsubject-form">
                    <h1 style={{ textAlign: 'left' }}>{subject.title}</h1>
                    <p className="create-time">{subject.created_At}</p>
                    <p style={{ textAlign: 'left' }}>{subject.desc}</p>
                    {!user.user?.isAdmin && user.user?.id === subject.user_ID && (
                        <div className="mx-auto d-flex flex-row bd-highlight float-end">
                            {subject.isHide ? (
                                <button className="btn btn-outline-success mx-2" onClick={onClickUnHideSubject}>
                                    Unhide
                                </button>
                            ) : (
                                <button className="btn btn-outline-warning mx-2" onClick={onClickHideSubject}>
                                    Hide
                                </button>
                            )}
                            <button className="btn btn-outline-danger" onClick={onClickDeleteSubject}>
                                Delete
                            </button>
                        </div>
                    )}
                    {user.user?.isAdmin && (
                        <div className="mx-auto d-flex flex-row bd-highlight float-end">
                            Admin :
                            {subject.isHide ? (
                                <button className="btn btn-outline-success mx-2" onClick={onClickUnHideSubject}>
                                    Unhide
                                </button>
                            ) : (
                                <button className="btn btn-outline-warning mx-2" onClick={onClickHideSubject}>
                                    Hide
                                </button>
                            )}
                            <button className="btn btn-outline-danger" onClick={onClickDeleteSubject}>
                                Delete
                            </button>
                        </div>
                    )}
                    <br></br>
                    <AddComment />
                    <CommentList />
                </div>
            )}
        </>
    );
};

export default SubjectDetail;
