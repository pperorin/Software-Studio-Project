import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import AddComment from './AddComment';
import CommentList from './CommentList';
const SubjectDetail = () => {
    const [subject, setSubjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const {id} = useParams();


    useEffect(() => {
        const fetchAllSubject = async () => {
            try {
                const response = await axios.get(`https://localhost:7061/api/subject/${id}`);
                console.log(response);
                setSubjects(response.data);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };
        fetchAllSubject();
    }, []);
    return <div className="container addsubject-form">
        <h1 style={{textAlign:"left"}}>{subject.title}</h1>
        <p className="create-time">{subject.created_At}</p>
        <p style={{textAlign:'left'}}>
            {subject.desc}
        </p>
        <AddComment/>
        <CommentList/>
    </div>
}

export default SubjectDetail;